import React, {useState, useCallback, useEffect} from 'react';
import EmailVerification from '../EmailVerification';
import {
  CommonStackNavigationTypes,
  EmailVerificationStackParamTypes,
} from '@typedef/routes/common.stack.types';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

const EmailVerificationContainer = ({
  route: {
    params: {
      data: {email, password},
    },
  },
}: EmailVerificationStackParamTypes) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  const signInWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      try {
        const userCredential = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        return userCredential.user;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    [email, password],
  );

  const onCompletedEmailVerificationPressed = useCallback(async () => {
    try {
      // const user = await signInWithEmailAndPassword(email, password);
      // console.log(user);
      const user = auth().currentUser;
      if (user) {
        await user.reload(); // 사용자 정보를 새로고침
        console.log(user);
        if (user.emailVerified) {
          console.log('성공');
          navigation.navigate('registerComplete');
        } else {
          Alert.alert('이메일 인증을 완료해주세요.');
        }
      }
    } catch (error) {
      Alert.alert('이메일 인증에 실패했습니다. 다시 시도해주세요.');
    }
  }, []);

  return (
    <EmailVerification
      email={email}
      onCompletedEmailVerificationPressed={onCompletedEmailVerificationPressed}
    />
  );
};

export default EmailVerificationContainer;
