import {View, Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import SendPasswordReset from '../SendPasswordReset';
import {emailRegEx} from '@lib/factory';
import Fauth from '@react-native-firebase/auth';
import {FirebaseErrorTypes} from '@typedef/lib/network.core.types';
import {Alert} from 'react-native';

type Props = {};

const SendPasswordResetContainer = (props: Props) => {
  // 이메일
  const [email, setEmail] = useState('');

  // 이메일 유효성 검사
  const [isEmailValidated, setIsEmailValidated] = useState(false);

  // 이메일 텍스트 변경 시 실행되는 함수
  const onEmailTextChanged = useCallback((text: string) => {
    if (!emailRegEx.test(text)) {
      setIsEmailValidated(false);
      setEmail('');
      return;
    }

    setIsEmailValidated(true);
    setEmail(text);
  }, []);

  const onSendPasswordResetPressed = useCallback(async () => {
    try {
      // 비밀번호 재설정 이메일 발송
      await Fauth().sendPasswordResetEmail(email);
      // 성공 메시지 표시
      Alert.alert('성공', '비밀번호 재설정 이메일이 발송되었습니다.');
    } catch (error) {
      // Firebase 에러 추출
      const {code, message} = error as FirebaseErrorTypes;

      /**
       * NOTE: Firebase의 "열거 보호(enumeration protection)" 기능 때문에 이메일이 없더라도 재설정 이메일이 전달된것으로 보이며, 이는 정상적인 처리입니다.
       *
       * 해서 서버에서 실제로 확인하고 보내는 부분도 필요해 보입니다.
       *
       * @https://github.com/firebase/firebase-ios-sdk/issues/12310
       */

      // 에러 처리
      switch (code) {
        case 'auth/invalid-email':
          Alert.alert('오류', '유효하지 않은 이메일 주소입니다.');
          break;
        case 'auth/missing-android-pkg-name':
          Alert.alert('오류', 'Android 패키지 이름이 필요합니다.');
          break;
        case 'auth/missing-continue-uri':
          Alert.alert('오류', '계속 URL이 제공되지 않았습니다.');
          break;
        case 'auth/missing-ios-bundle-id':
          Alert.alert('오류', 'iOS 번들 ID가 필요합니다.');
          break;
        case 'auth/invalid-continue-uri':
          Alert.alert('오류', '제공된 계속 URL이 유효하지 않습니다.');
          break;
        case 'auth/unauthorized-continue-uri':
          Alert.alert('오류', '계속 URL의 도메인이 허용되지 않았습니다.');
          break;
        case 'auth/user-not-found':
          Alert.alert('오류', '해당 이메일 주소와 일치하는 사용자가 없습니다.');
          break;
        default:
          Alert.alert('오류', '비밀번호 재설정 중 문제가 발생했습니다.');
      }
      console.error('Password reset error:', code, message);
    }
  }, [email]);

  // 도움이 필요하신가요 클릭시 실행되는 함수
  const onHelpPressed = useCallback(() => {}, []);

  return (
    <SendPasswordReset
      isEmailValidated={isEmailValidated}
      onEmailTextChanged={onEmailTextChanged}
      onSendPasswordResetPressed={onSendPasswordResetPressed}
    />
  );
};

export default SendPasswordResetContainer;
