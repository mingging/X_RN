import colors from '@assets/colors';
import Pretendard from '@assets/fonts';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import CertificationCodePadContainer from '../containers/CertificationCodeContainer';
import Modal from 'react-native-modal';

type Props = {
  certificationCodeError: boolean;
  isPressedSendCertificationCode: boolean;
  onSendCertificationCodePressed: () => void;
  onCertificationCodeChanged: (code: string) => void;
  onAuthenticatePressed: () => void;
};

const CertificationCodeModal = ({
  certificationCodeError,
  isPressedSendCertificationCode,
  onSendCertificationCodePressed,
  onCertificationCodeChanged,
  onAuthenticatePressed,
}: Props) => {
  return (
    <Modal
      isVisible={isPressedSendCertificationCode}
      onSwipeComplete={onSendCertificationCodePressed}
      swipeDirection={['down']}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}>
      <View
        style={{
          backgroundColor: colors['111111'],
          padding: 20,
          height: 296,
        }}>
        <Text
          style={[
            Pretendard.SemiBold,
            {
              fontSize: 18,
              color: colors.FFFFFF,
              marginBottom: 30,
            },
          ]}>
          인증코드를 입력해주세요
        </Text>
        <CertificationCodePadContainer
          onCertificationCodeChanged={onCertificationCodeChanged}
        />
        <TouchableOpacity onPress={onAuthenticatePressed}>
          <View
            style={{
              marginTop: 30,
              backgroundColor: colors.FFFFFF,
              paddingHorizontal: 14,
              height: 48,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={[
                Pretendard.SemiBold,
                {
                  fontSize: 16,
                  color: colors[262626],
                },
              ]}>
              인증하기
            </Text>
          </View>
        </TouchableOpacity>
        {certificationCodeError && (
          <Text
            style={[
              Pretendard.Regular,
              {
                color: colors['FA3A3A'],
                fontSize: 14,
                textAlign: 'center',
                marginTop: 10,
              },
            ]}>
            인증번호가 일치하지 않습니다.
          </Text>
        )}
      </View>
    </Modal>
  );
};

export default CertificationCodeModal;
