import React, { useState, useCallback } from 'react';
import Register from '../Register';
import { useNavigation } from '@react-navigation/native';
import { CommonStackNavigationTypes } from '@typedef/routes/common.stack.types';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';


export type RegisterFormType = {
    email: string,
    phoneNumber: string,
    nickName: string,
    name: string,
    birth: string
}

const RegisterContainer = () => {
    const navigation = useNavigation<CommonStackNavigationTypes>();

    const [isPressedSendCertificationCode, setIsPressedSendCertificationCode] = useState(false);
    const [certificationCode, setCertificationCode] = useState('');

    const [isShowCountryCodeModal, setIsShowCountryCodeModal] = useState(false);
    const [selectedCountryCode, setSelectedCountryCode] = useState('+82');

    const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult>();


    // 입력 폼
    const [registerForm, setRegisterForm] = useState<RegisterFormType>({
        email: '',
        phoneNumber: '',
        nickName: '',
        name: '',
        birth: '',
    })

    // 행동을 직역으로 표시
    // true 인 걸 모르기 때문에 변수가 바뀌는 지 모른다.
    // useCallback 은 dependency 가 중요하다
    // useCallback 없이 함수를 사용하면, 리프레쉬 될 때마다 함수가 계속 렌더링 된다.
    // 메모리 누수가 심각해진다.
    // useCallback 을 반드시 써줘야한다. -> 기본적인 최적화
    const onCertificationCodeChanged = useCallback((code: string) => {
        setCertificationCode(code);

        // 인증코드 입력
        onCertificationCode()

    }, [certificationCode])

    const onCertificationCode = useCallback(async () => {
        try {
            if (confirm) {
                await confirm.confirm(certificationCode);
            }
        } catch (error) {
            console.log(error);
        }
    }, [confirm])

    const onAuthenticatePressed = useCallback(() => {
        console.log(certificationCode);
        setIsPressedSendCertificationCode(false);
    }, [certificationCode])

    // 동일한 변수명으로 작성 -> 매핑이 되어야 한다! (중요!)
    const onSendCertificationCodePressed = useCallback(() => {
        setIsPressedSendCertificationCode(!isPressedSendCertificationCode)

        // 인증 코드 전송
        onSendCertificationCode();
    }, [isPressedSendCertificationCode])

    const onSendCertificationCode = useCallback(async () => {
        console.log(registerForm)
        console.log(`${selectedCountryCode} ${registerForm.phoneNumber}`)
        try {
            const confirmation = await auth().signInWithPhoneNumber(`${selectedCountryCode} ${registerForm.phoneNumber}`);
            console.log('confirmation ', confirmation)
            setConfirm(confirmation);
        } catch (error) {
            console.log(error)
        }
    }, [registerForm.phoneNumber])

    // 입력한 내용 세이브
    const onEmailAuthenticationPressed = useCallback(() => {
        console.log('registerForm', registerForm);
        navigation.navigate('email');
    }, [navigation]);

    // 국가 코드 모달 오픈
    const onShowCountryModal = useCallback(() => {
        console.log(isShowCountryCodeModal);
        setIsShowCountryCodeModal(!isShowCountryCodeModal)
    }, [isShowCountryCodeModal])

    // 선택한 국가 코드 가져오기
    const onSelectedCountryCode = useCallback((code: string) => {
        console.log('countryCode : ', code)
        setSelectedCountryCode(code);
    }, [selectedCountryCode])

    // 전화번호 입력 시
    const onPhoneNumberTextChange = useCallback((text: string) => {
        console.log(text)
        setRegisterForm((prevState) => ({
            ...prevState,
            phoneNumber: text
        }))
    }, [registerForm])

    // 닉네임 입력
    const onNickNameTextChange = useCallback((text: string) => {
        setRegisterForm((prevState) => ({
            ...prevState,
            nickName: text
        }))
    }, [registerForm])

    // 성명 입력
    const onNameTextChange = useCallback((text: string) => {
        setRegisterForm((prevState) => ({
            ...prevState,
            name: text
        }))
    }, [registerForm])

    // 생년월일 입력
    const onBirthTextChange = useCallback((text: string) => {
        setRegisterForm((prevState) => ({
            ...prevState,
            birth: text
        }))
    }, [registerForm])

    return (
        <Register
            isPressedSendCertificationCode={isPressedSendCertificationCode}
            onAuthenticatePressed={onAuthenticatePressed}
            onSendCertificationCodePressed={onSendCertificationCodePressed}
            onEmailAuthenticationPressed={onEmailAuthenticationPressed}
            onCertificationCodeChanged={onCertificationCodeChanged}

            isShowCountryCodeModal={isShowCountryCodeModal}
            onShowCountryModal={onShowCountryModal}
            onSelectedCountryCode={onSelectedCountryCode}
            selectedCountryCode={selectedCountryCode}

            onPhoneNumberTextChange={onPhoneNumberTextChange}
            onNickNameTextChange={onNickNameTextChange}
            onNameTextChange={onNameTextChange}
            onBirthTextChange={onBirthTextChange}

            registerForm={registerForm}
        />
    )
};

export default RegisterContainer;