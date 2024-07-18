import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Pretendard from '@assets/fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '@assets/images';
import colors from '@assets/colors';
import {hasNotch} from 'react-native-device-info';

type Props = {
  onEmailTextChanged: (text: string) => void;
  onPasswordTextChanged: (text: string) => void;
};

const Login = ({onEmailTextChanged, onPasswordTextChanged}: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <KeyboardAwareScrollView
        bounces={false}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingTop: 90,
          paddingHorizontal: 20,
        }}>
        <View>
          <Image source={images.logo.symbol} />
        </View>
        <Text
          style={[
            Pretendard.SemiBold,
            {
              fontSize: 24,
              color: colors.FFFFFF,
              marginTop: 32,
            },
          ]}>
          현재 무슨일이 일어나고있나요?
        </Text>
        <Text
          style={[
            Pretendard.Medium,
            {
              fontSize: 14,
              color: colors['444444'],
              lineHeight: 18,
              marginTop: 18,
            },
          ]}>
          아마존 전 세계 Prime 회원들을 대상으로 다양한 브랜드의 수백만 개의
          상품에 대한 독점 할인 제공. 올해는 Megan Thee Stallion이 Prime Day의
          새로운 홍보 대사로 선정되어 특별한 음악 비디오와 함께 행사를
          시작했습니다
        </Text>
        {/* 이메일 */}
        <TextInput
          onChangeText={onEmailTextChanged}
          style={{
            marginTop: 28,
            backgroundColor: colors['141414'],
            color: colors.FFFFFF,
            paddingHorizontal: 14,
            height: 48,
          }}
          placeholder="이메일"
          keyboardType="email-address"
          placeholderTextColor={colors['666666']}
        />
        {/* 비밀번호 */}
        <TextInput
          onChangeText={onPasswordTextChanged}
          style={{
            marginTop: 12,
            backgroundColor: colors['141414'],
            color: colors.FFFFFF,
            paddingHorizontal: 14,
            height: 48,
          }}
          secureTextEntry
          placeholder="비밀번호"
          placeholderTextColor={colors['666666']}
        />
        <TouchableOpacity
          style={{
            height: 48,
            backgroundColor: colors.FFFFFF,
            marginTop: 28,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              Pretendard.SemiBold,
              {
                fontSize: 16,
                color: colors['262626'],
              },
            ]}>
            로그인하기
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 18,
            justifyContent: 'center',
            gap: 14,
          }}>
          <TouchableOpacity>
            <Text
              style={[
                Pretendard.SemiBold,
                {
                  fontSize: 14,
                  color: colors.FFFFFF,
                },
              ]}>
              회원가입
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              Pretendard.SemiBold,
              {
                fontSize: 14,
                color: colors.FFFFFF,
              },
            ]}>
            /
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                Pretendard.SemiBold,
                {
                  fontSize: 14,
                  color: colors.FFFFFF,
                },
              ]}>
              비밀번호 재설정
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
    </View>
  );
};

export default Login;
