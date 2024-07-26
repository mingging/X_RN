import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import SendPasswordResetComplete from '../SendPasswordResetComplete';
import {
  CommonStackNavigationTypes,
  SendPasswordResetCompleteStackParamTypes,
} from '@typedef/routes/common.stack.types';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const SendPasswordResetCompleteContainer = ({
  route: {
    params: {
      data: {email},
    },
  },
}: SendPasswordResetCompleteStackParamTypes) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  const onLoginPressed = useCallback(() => {
    navigation.navigate('login');
  }, []);

  return (
    <SendPasswordResetComplete email={email} onLoginPressed={onLoginPressed} />
  );
};

export default SendPasswordResetCompleteContainer;
