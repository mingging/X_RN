import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {hasNotch} from 'react-native-device-info';
import colors from '@assets/colors';
import Pretendard from '@assets/fonts';

type Props = {
  email: string;
  onLoginPressed: () => void;
};

const SendPasswordResetComplete = ({email, onLoginPressed}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 32,
      }}>
      <Text
        style={[
          Pretendard.SemiBold,
          {
            fontSize: 18,
            color: colors['FFFFFF'],
          },
        ]}>
        비밀번호 재설정 이메일을 전송하였습니다
      </Text>
      <Text
        style={[
          Pretendard.Medium,
          {
            fontSize: 14,
            color: colors['444444'],
            marginTop: 4,
            lineHeight: 18,
          },
        ]}>
        {email}로{'\n'}
        비밀번호 재설정 이메일을 보냈습니다.{'\n'}
        {'\n'}
        X에 가입되지 않은 이메일은 비밀번호 재설정이 불가능합니다
      </Text>
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: hasNotch() ? 30 : 12,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <TouchableOpacity
          onPress={onLoginPressed}
          style={{
            marginTop: 22,
            backgroundColor: colors['FFFFFF'],
            alignItems: 'center',
            justifyContent: 'center',
            height: 48,
          }}>
          <Text
            style={[
              Pretendard.SemiBold,
              {
                fontSize: 16,
                color: colors['262626'],
              },
            ]}>
            로그인 하러가기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={[
              Pretendard.SemiBold,
              {
                fontSize: 14,
                color: colors['C9C9C9'],
                marginTop: 8,
                textAlign: 'center',
              },
            ]}>
            도움이 필요하신가요?
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            Pretendard.SemiBold,
            {
              fontSize: 14,
              color: colors['262626'],
              textAlign: 'center',
              marginTop: 40,
            },
          ]}>
          © 2024 X Corp.
        </Text>
      </View>
    </View>
  );
};

export default SendPasswordResetComplete;
