import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Pretendard from '@assets/fonts';
import colors from '@assets/colors';
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import {hasNotch} from 'react-native-device-info';

type Props = {
  isEmailValidated: boolean;
  onEmailTextChanged: (text: string) => void;
  onSendPasswordResetPressed: () => void;
};

const SendPasswordReset = ({
  isEmailValidated,
  onEmailTextChanged,
  onSendPasswordResetPressed,
}: Props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <KeyboardAwareScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 30,
        }}
        bounces={false}
        scrollEnabled={false}>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={[
              Pretendard.SemiBold,
              {
                fontSize: 18,
                color: colors['FFFFFF'],
              },
            ]}>
            X에 가입한 이메일을 입력해주세요
          </Text>
          <Text
            style={[
              Pretendard.Medium,
              {
                fontSize: 14,
                color: colors['444444'],
                marginTop: 8,
              },
            ]}>
            X에 가입되지 않은 이메일은 비밀번호 재설정이 불가능합니다
          </Text>
          <TextInput
            autoCapitalize="none"
            autoComplete="off"
            autoFocus={true}
            onChangeText={onEmailTextChanged}
            keyboardType="email-address"
            placeholder="이메일"
            placeholderTextColor={colors['666666']}
            style={[
              Pretendard.Regular,
              {
                fontSize: 18,
                color: colors['FFFFFF'],
                marginTop: 22,
                backgroundColor: colors['141414'],
                paddingHorizontal: 14,
                height: 48,
              },
            ]}
          />
          {isEmailValidated ? (
            <TouchableOpacity
              onPress={onSendPasswordResetPressed}
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
                비밀번호 재설정 이메일 보내기
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled
              style={{
                marginTop: 22,
                backgroundColor: colors['262626'],
                alignItems: 'center',
                justifyContent: 'center',
                height: 48,
              }}>
              <Text
                style={[
                  Pretendard.Regular,
                  {
                    fontSize: 16,
                    color: colors['666666'],
                  },
                ]}>
                이메일을 입력해주세요
              </Text>
            </TouchableOpacity>
          )}
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
        </View>
      </KeyboardAwareScrollView>
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: hasNotch() ? 30 : 12,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <Text
          style={[
            Pretendard.SemiBold,
            {
              fontSize: 14,
              color: colors['262626'],
              textAlign: 'center',
            },
          ]}>
          © 2024 X Corp.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SendPasswordReset;
