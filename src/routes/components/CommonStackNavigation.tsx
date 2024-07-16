import colors from '@assets/colors';
import Pretendard from '@assets/fonts';
import LoginContainer from '@components/Login/containers/LoginContainer';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CommonStackParamsListTypes} from '@typedef/routes/common.stack.types';
import React from 'react';
import {View, Text, TouchableOpacity, Image, Appearance} from 'react-native';

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
            // contentStyle: {
            //   backgroundColor: colors[theme].WHITE,
            // },
            // headerTitleStyle: [
            //   Pretendard.SemiBold,
            //   {
            //     fontSize: 18,
            //     color: colors[theme].BLACK,
            //   },
            // ],
            headerTitleAlign: 'center',
            // headerLeft: () => (
            //   <TouchableOpacity
            //     onPress={navigation.goBack}
            //     onLongPress={navigation.popToTop}>
            //     <Image
            //       source={
            //         images.icons.icBack[theme === 'dark' ? 'white' : 'black']
            //       }
            //     />
            //   </TouchableOpacity>
            // ),
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
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default CommonStackNavigation;
