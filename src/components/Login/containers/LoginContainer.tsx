import {View, Text} from 'react-native';
import React, {useCallback, useState, useTransition} from 'react';
import Login from '../Login';
import {useNavigation} from '@react-navigation/native';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';

type Props = {};

const LoginContainer = (props: Props) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailTextChanged = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const onPasswordTextChanged = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const onRegisterPressed = useCallback(() => {
    navigation.navigate('phoneVerification');
  }, [navigation]);

  // 비밀번호 재설정 화면으로 이동
  const onSendPasswordResetPressed = useCallback(() => {
    navigation.navigate('sendPasswordReset');
  }, [navigation]);

  return (
    <Login
      onEmailTextChanged={onEmailTextChanged}
      onPasswordTextChanged={onPasswordTextChanged}
      onRegisterPressed={onRegisterPressed}
      onSendPasswordResetPressed={onSendPasswordResetPressed}
    />
  );
};

export default LoginContainer;
