import colors from '@assets/colors';
import Pretendard from '@assets/fonts';
import CountryCodeModalContainer from '@components/PhoneVerification/containers/CountryCodeModalContainer';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CertificationCodeModalContainer from './containers/CertificationCodeModalContainer';

type Props = {
  certificationCodeError: boolean;
  phoneNumber: string;

  isPressedSendCertificationCode: boolean;
  onSendCertificationCodePressed: () => void;
  onCertificationCodeChanged: (code: string) => void;
  onAuthenticatePressed: () => void;

  isShowCountryCodeModal: boolean;
  onShowCountryModal: () => void;
  onSelectedCountryCode: (code: string) => void;
  selectedCountryCode: string;

  onPhoneNumberTextChange: (text: string) => void;
};

const PhoneVerification = ({
  certificationCodeError,
  phoneNumber,

  onAuthenticatePressed,
  isPressedSendCertificationCode,
  onSendCertificationCodePressed,
  onCertificationCodeChanged,

  isShowCountryCodeModal,
  onShowCountryModal,
  onSelectedCountryCode,
  selectedCountryCode,

  onPhoneNumberTextChange,
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
                color: colors['444444'],
                lineHeight: 18,
                marginTop: 10,
              },
            ]}>
            X의 회원이 되어 특별한 혜택과 함께 전 세계 3억명 이상의 유저와
            소통해보세요! 회원 전용 할인, 이벤트, 그리고 다양한 독점 콘텐츠를
            지금 바로 만나보세요. X와 함께 더 나은 경험을 시작하세요!
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity onPress={onShowCountryModal}>
            <View
              style={{
                backgroundColor: colors['141414'],
                paddingHorizontal: 25,
                height: 48,
                marginRight: 10,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  Pretendard.Regular,
                  {
                    fontSize: 18,
                    color: colors.FFFFFF,
                    lineHeight: 24,
                  },
                ]}>
                {selectedCountryCode}
              </Text>
            </View>
          </TouchableOpacity>
          <CountryCodeModalContainer
            isShowCountryCodeModal={isShowCountryCodeModal}
            onShowCountryModal={onShowCountryModal}
            onSelectedCountryCode={onSelectedCountryCode}
          />
          <TextInput
            onChangeText={text => onPhoneNumberTextChange(text)}
            style={{
              backgroundColor: colors['141414'],
              color: colors.FFFFFF,
              paddingHorizontal: 14,
              height: 48,
              flex: 2,
            }}
            placeholder="휴대폰 번호"
            keyboardType="phone-pad"
            placeholderTextColor={colors['666666']}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={onSendCertificationCodePressed}
            disabled={phoneNumber.length > 0 ? false : true}
            style={[
              {
                marginTop: 10,
                backgroundColor: colors[262626],
                paddingHorizontal: 14,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              },
              phoneNumber.length > 0
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
              ]}>
              인증번호 보내기
            </Text>
          </TouchableOpacity>
        </View>
        <CertificationCodeModalContainer
          certificationCodeError={certificationCodeError}
          isPressedSendCertificationCode={isPressedSendCertificationCode}
          onSendCertificationCodePressed={onSendCertificationCodePressed}
          onCertificationCodeChanged={onCertificationCodeChanged}
          onAuthenticatePressed={onAuthenticatePressed}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default PhoneVerification;
