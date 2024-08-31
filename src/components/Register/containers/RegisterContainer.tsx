import React, {useState, useCallback} from 'react';
import Register from '../Register';
import {useNavigation} from '@react-navigation/native';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type RegisterFormType = {
  email: string;
  password: string;
  nickName: string;
  name: string;
  birth: string;
};

// 이메일 유효성 검사
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 비밀번호 유효성 검사
export const isValidPassword = (password: string): boolean => {
  // 비밀번호가 6자 이상인지 확인합니다.
  return password.length >= 6;
};

const RegisterContainer = () => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  // 입력 폼
  const [registerForm, setRegisterForm] = useState<RegisterFormType>({
    email: '',
    password: '',
    nickName: '',
    name: '',
    birth: '',
  });

  // 행동을 직역으로 표시
  // true 인 걸 모르기 때문에 변수가 바뀌는 지 모른다.
  // useCallback 은 dependency 가 중요하다
  // useCallback 없이 함수를 사용하면, 리프레쉬 될 때마다 함수가 계속 렌더링 된다.
  // 메모리 누수가 심각해진다.
  // useCallback 을 반드시 써줘야한다. -> 기본적인 최적화

  // 동일한 변수명으로 작성 -> 매핑이 되어야 한다! (중요!)

  // 이메일 입력 시
  const onEmailTextChange = useCallback(
    (text: string) => {
      setRegisterForm(prevState => ({
        ...prevState,
        email: isValidEmail(text) ? text : '',
      }));
    },
    [registerForm.email],
  );

  const onPasswordTextChange = useCallback(
    (text: string) => {
      setRegisterForm(prevState => ({
        ...prevState,
        password: isValidPassword(text) ? text : '',
      }));
    },
    [registerForm.password],
  );
  // 닉네임 입력
  const onNickNameTextChange = useCallback(
    (text: string) => {
      setRegisterForm(prevState => ({
        ...prevState,
        nickName: text,
      }));
    },
    [registerForm],
  );

  // 성명 입력
  const onNameTextChange = useCallback(
    (text: string) => {
      setRegisterForm(prevState => ({
        ...prevState,
        name: text,
      }));
    },
    [registerForm],
  );

  // 생년월일 입력
  const onBirthTextChange = useCallback(
    (text: string) => {
      setRegisterForm(prevState => ({
        ...prevState,
        birth: text,
      }));
    },
    [registerForm],
  );

  // 입력한 내용 세이브
  const onEmailVerificationPressed = useCallback(() => {
    console.log('registerForm', registerForm);

    // 이메일 인증
    registerUser(registerForm);

    // navigation.navigate('email');
  }, [navigation, registerForm]);

  const registerUser = useCallback(
    async (registerForm: RegisterFormType) => {
      try {
        const userCredential = await auth().createUserWithEmailAndPassword(
          registerForm.email,
          registerForm.password,
        );
        await sendEmailVerification();
        return userCredential.user;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    [registerForm],
  );

  const sendEmailVerification = useCallback(async () => {
    try {
      const user = auth().currentUser;
      if (user) {
        await user.sendEmailVerification();
        console.log('이메일 인증');
      }
    } catch (error) {
      console.log('error 이메일 인증 오류', error);
      throw error;
    }
  }, [registerForm]);

  // 모든 정보 입력 완료했는지 체크
  const checkCompletedRegisterForm = useCallback((): boolean => {
    // 이메일 체크
    if (registerForm.email === '') {
      console.log('email false');
      return false;
    }

    // 비밀번호 체크
    if (registerForm.password === '') {
      console.log('password false');
      return false;
    }

    // 닉네임 체크
    if (registerForm.nickName === '') {
      console.log('nickName false');
      return false;
    }

    // 성명 체크
    if (registerForm.name === '') {
      console.log('name false');
      return false;
    }

    // 생년월일 체크
    if (registerForm.birth === '') {
      console.log('birth false');
      return false;
    }

    return true;
  }, [registerForm]);

  return (
    <Register
      onEmailVerificationPressed={onEmailVerificationPressed}
      onEmailTextChange={onEmailTextChange}
      onPasswordTextChange={onPasswordTextChange}
      onNickNameTextChange={onNickNameTextChange}
      onNameTextChange={onNameTextChange}
      onBirthTextChange={onBirthTextChange}
      checkCompletedRegisterForm={checkCompletedRegisterForm}
      registerForm={registerForm}
    />
  );
};

export default RegisterContainer;
