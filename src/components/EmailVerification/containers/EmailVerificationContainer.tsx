import React, {useState, useCallback, useEffect} from 'react';
import EmailVerification from '../EmailVerification';
import {
  CommonStackNavigationTypes,
  EmailVerificationStackParamTypes,
} from '@typedef/routes/common.stack.types';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

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
      const user = await signInWithEmailAndPassword(email, password);
      if (user && !user.emailVerified) {
        console.log('이메일 인증을 완료해주세요.');
      } else {
        console.log('성공');
        navigation.navigate('registerComplete');
      }
    } catch (error) {
      console.log('실패');
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
