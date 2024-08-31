import colors from '@assets/colors';
import Pretendard from '@assets/fonts';
import images from '@assets/images';
import LoginContainer from '@components/Login/containers/LoginContainer';
import EmailVerificationContainer from '@components/EmailVerification/containers/EmailVerificationContainer';
import RegisterCompleteContainer from '@components/RegisterComplete/containers/RegisterCompleteContainer';
import RegisterContainer from '@components/Register/containers/RegisterContainer';
import SendPasswordResetContainer from '@components/SendPasswordReset/containers/SendPasswordResetContainer';
import SendPasswordResetCompleteContainer from '@components/SendPasswordResetComplete/containers/SendPasswordResetCompleteContainer';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CommonStackParamsListTypes} from '@typedef/routes/common.stack.types';
import React from 'react';
import {View, Text, TouchableOpacity, Image, Appearance} from 'react-native';
import PhoneVerificationContainer from '@components/PhoneVerification/containers/PhoneVerificationContainer';

const Stack = createNativeStackNavigator<CommonStackParamsListTypes>();

type Props = {
  // cartCount: number;
};

const CommonStackNavigation = ({}: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={({navigation}) => ({
            contentStyle: {
              backgroundColor: colors['000000'],
            },
            headerStyle: {
              backgroundColor: colors['000000'],
            },
            headerTitleStyle: [
              Pretendard.Medium,
              {
                fontSize: 16,
                color: colors.FFFFFF,
              },
            ],
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                onPress={navigation.goBack}
                onLongPress={navigation.popToTop}>
                <Image
                  source={
                    // images.icons.icBack[theme === 'dark' ? 'white' : 'black']
                    images.icons.icBack
                  }
                />
              </TouchableOpacity>
            ),
            headerShadowVisible: false,
            // headerStyle: {
            //   backgroundColor: colors[theme].WHITE,
            // },
          })}>
          <Stack.Screen
            name="login"
            component={LoginContainer}
            options={{
              headerLeft: undefined,
              title: '',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="phoneVerification"
            component={PhoneVerificationContainer}
            options={{
              // headerLeft: undefined,
              title: '회원가입',
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="register"
            component={RegisterContainer}
            options={{
              // headerLeft: undefined,
              title: '회원가입',
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="emailVerification"
            component={EmailVerificationContainer}
            options={{
              // headerLeft: undefined,
              title: '이메일 인증',
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="registerComplete"
            component={RegisterCompleteContainer}
            options={{
              title: '가입 완료',
            }}
          />
          <Stack.Screen
            name="sendPasswordReset"
            component={SendPasswordResetContainer}
            options={{
              title: '비밀번호 재설정',
            }}
          />
          <Stack.Screen
            name="sendPasswordResetComplete"
            component={SendPasswordResetCompleteContainer}
            options={{
              title: '전송완료',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default CommonStackNavigation;
