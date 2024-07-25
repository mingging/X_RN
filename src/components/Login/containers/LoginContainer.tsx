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
    navigation.navigate('register');
  }, [navigation]);

  return (
    <Login
      onEmailTextChanged={onEmailTextChanged}
      onPasswordTextChanged={onPasswordTextChanged}
      onRegisterPressed={onRegisterPressed}
    />
  );
};

export default LoginContainer;
