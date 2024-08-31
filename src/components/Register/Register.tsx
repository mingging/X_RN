import colors from '@assets/colors';
import Pretendard from '@assets/fonts';
import React, {useCallback, useRef, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';
import CertificationCodePad from '../PhoneVerification/components/CertificationCodePad';
import CertificationCodePadContainer from '../PhoneVerification/containers/CertificationCodeContainer';
import CountryCodeModalContainer from '../PhoneVerification/containers/CountryCodeModalContainer';
import {RegisterFormType} from './containers/RegisterContainer';

type Props = {
  onEmailVerificationPressed: () => void;

  onEmailTextChange: (text: string) => void;
  onPasswordTextChange: (text: string) => void;
  onNickNameTextChange: (text: string) => void;
  onNameTextChange: (text: string) => void;
  onBirthTextChange: (text: string) => void;

  checkCompletedRegisterForm: () => boolean;
  registerForm: RegisterFormType;
};

const Register = ({
  onEmailVerificationPressed,
  onEmailTextChange,
  onPasswordTextChange,
  onNickNameTextChange,
  onNameTextChange,
  onBirthTextChange,

  checkCompletedRegisterForm,
  registerForm,
}: Props) => {
  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView
        bounces={false}
        style={{flex: 1}}
        contentContainerStyle={{
          paddingTop: 30,
          paddingHorizontal: 20,
        }}>
        <View>
          <Text
            style={[
              Pretendard.SemiBold,
              {
                fontSize: 18,
                color: colors.C9C9C9,
                lineHeight: 24,
                // marginTop: 20
              },
            ]}>
            X의 회원이 되어{`\n`}
            3억명 이상의 유저와 소통해보세요
          </Text>
          <Text
            style={[
              Pretendard.Medium,
              {
                fontSize: 14,
                color: colors[444444],
                lineHeight: 18,
                marginTop: 10,
              },
            ]}>
            X의 회원이 되어 특별한 혜택과 함께 전 세계 3억명 이상의 유저와
            소통해보세요! 회원 전용 할인, 이벤트, 그리고 다양한 독점 콘텐츠를
            지금 바로 만나보세요. X와 함께 더 나은 경험을 시작하세요!
          </Text>
        </View>
        <View>
          {/* 이메일 */}
          <TextInput
            onChangeText={onEmailTextChange}
            style={{
              marginTop: 20,
              backgroundColor: colors['141414'],
              color: colors.FFFFFF,
              paddingHorizontal: 14,
              height: 48,
            }}
            placeholder="이메일"
            keyboardType="email-address"
            placeholderTextColor={colors['666666']}
            autoCapitalize="none"
          />
          {/* 비밀번호 */}
          <TextInput
            onChangeText={onPasswordTextChange}
            style={{
              marginTop: 10,
              backgroundColor: colors['141414'],
              color: colors.FFFFFF,
              paddingHorizontal: 14,
              height: 48,
            }}
            placeholder="비밀번호"
            keyboardType="email-address"
            placeholderTextColor={colors['666666']}
            autoCapitalize="none"
            secureTextEntry={true}
          />

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TextInput
              onChangeText={text => onNickNameTextChange(text)}
              style={{
                backgroundColor: colors['141414'],
                color: colors.FFFFFF,
                paddingHorizontal: 14,
                height: 48,
                marginRight: 10,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              placeholder="닉네임"
              keyboardType="phone-pad"
              placeholderTextColor={colors['666666']}
            />
            <TouchableOpacity
              disabled={registerForm.nickName.length > 0 ? false : true}
              style={[
                {
                  paddingHorizontal: 14,
                  height: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                registerForm.nickName.length > 0
                  ? {
                      backgroundColor: colors.FFFFFF,
                    }
                  : {
                      backgroundColor: colors[262626],
                    },
              ]}>
              <Text
                style={[
                  Pretendard.Regular,
                  {
                    fontSize: 16,
                  },
                  registerForm.nickName.length > 0
                    ? {
                        color: colors[262626],
                      }
                    : {
                        color: colors[666666],
                      },
                ]}>
                중복확인
              </Text>
            </TouchableOpacity>
          </View>
          {/* 성명 */}
          <TextInput
            onChangeText={text => onNameTextChange(text)}
            style={{
              marginTop: 10,
              backgroundColor: colors['141414'],
              color: colors.FFFFFF,
              paddingHorizontal: 14,
              height: 48,
            }}
            placeholder="성명"
            keyboardType="default"
            placeholderTextColor={colors['666666']}
          />
          {/* 생년월일 */}
          <TextInput
            onChangeText={text => onBirthTextChange(text)}
            style={{
              marginTop: 10,
              backgroundColor: colors['141414'],
              color: colors.FFFFFF,
              paddingHorizontal: 14,
              height: 48,
            }}
            placeholder="생년월일(YYYYMMDD)"
            keyboardType="default"
            placeholderTextColor={colors['666666']}
          />
          <TouchableOpacity
            disabled={!checkCompletedRegisterForm()}
            onPress={onEmailVerificationPressed}
            style={[
              {
                marginTop: 10,
                paddingHorizontal: 14,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              },
              checkCompletedRegisterForm()
                ? {
                    backgroundColor: colors.FFFFFF,
                  }
                : {
                    backgroundColor: colors[262626],
                  },
            ]}>
            <Text
              style={[
                Pretendard.Regular,
                {
                  fontSize: 16,
                },
                ,
                checkCompletedRegisterForm()
                  ? {
                      color: colors[262626],
                    }
                  : {
                      color: colors[666666],
                    },
              ]}>
              {checkCompletedRegisterForm()
                ? '가입완료 하기'
                : '가입에 필요한 정보를 입력해주세요!'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              paddingHorizontal: 14,
              justifyContent: 'center',
              alignItems: 'center',
              height: 32,
            }}>
            <Text
              style={[
                Pretendard.SemiBold,
                {
                  fontSize: 14,
                  color: colors.C9C9C9,
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  contentContainer: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});

export default Register;
