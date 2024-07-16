import {View, Text} from 'react-native';
import React from 'react';
import Pretendard from '@assets/fonts';

type Props = {};

const Login = (props: Props) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={Pretendard.Regular}>Hello World</Text>
      <Text style={Pretendard.Medium}>Hello World</Text>
      <Text style={Pretendard.SemiBold}>Hello World</Text>
      <Text style={Pretendard.Bold}>Hello World</Text>
    </View>
  );
};

export default Login;
