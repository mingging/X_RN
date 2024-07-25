import colors from '@assets/colors';
import Pretendard from '@assets/fonts';
import images from '@assets/images';
import LoginContainer from '@components/Login/containers/LoginContainer';
import EmailContainer from '@components/Register/containers/EmailContainer';
import RegisterContainer from '@components/Register/containers/RegisterContainer';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CommonStackParamsListTypes } from '@typedef/routes/common.stack.types';
import React from 'react';
import { View, Text, TouchableOpacity, Image, Appearance } from 'react-native';

const Stack = createNativeStackNavigator<CommonStackParamsListTypes>();

type Props = {
  // cartCount: number;
};

const CommonStackNavigation = ({ }: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={({ navigation }) => ({
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
            name="register"
            component={RegisterContainer}
            options={{
              // headerLeft: undefined,
              title: '회원가입',
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name="email"
            component={EmailContainer}
            options={{
              // headerLeft: undefined,
              title: '이메일 인증',
              // headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default CommonStackNavigation;
