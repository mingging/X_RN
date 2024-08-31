import React, {useCallback, useState} from 'react';
import PhoneVerification from '../PhoneVerification';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';

// 인증번호 -> 이메일 인증 나누고 linkWithCredential 이용해서 합치기
const PhoneVerificationContainer = () => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  const [isPressedSendCertificationCode, setIsPressedSendCertificationCode] =
    useState(false);
  const [certificationCode, setCertificationCode] = useState('');
  const [certificationCodeError, setCertificationCodeError] = useState(false);
  const [isShowCountryCodeModal, setIsShowCountryCodeModal] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+82');

  const [phoneNumber, setPhoneNumber] = useState('');

  const [confirm, setConfirm] = useState<string | null>(null);

  // 전화번호 입력 시
  const onPhoneNumberTextChange = useCallback(
    (text: string) => {
      setPhoneNumber(text);
    },
    [phoneNumber],
  );

  const onCertificationCodeChanged = useCallback(
    (code: string) => {
      setCertificationCode(code);
    },
    [certificationCode],
  );

  const onCertificationCode = useCallback(async () => {
    try {
      console.log(certificationCode);
      if (confirm) {
        const credential = auth.PhoneAuthProvider.credential(
          confirm,
          certificationCode,
        );
        await auth().signInWithCredential(credential);

        console.log('전화번호 인증 성공');
        setCertificationCodeError(false);
        setIsPressedSendCertificationCode(false);

        navigation.navigate('register');
      }
    } catch (error) {
      // 인증 실패
      setCertificationCodeError(true);
      console.log(error);
    }
  }, [confirm, certificationCode]);

  const onAuthenticatePressed = useCallback(() => {
    // 인증코드 입력
    onCertificationCode();
  }, [certificationCode]);

  const onSendCertificationCodePressed = useCallback(() => {
    setIsPressedSendCertificationCode(!isPressedSendCertificationCode);
    // 인증 코드 전송
    onSendCertificationCode();
  }, [isPressedSendCertificationCode, phoneNumber]);

  // 국가 코드 모달 오픈
  const onShowCountryModal = useCallback(() => {
    setIsShowCountryCodeModal(!isShowCountryCodeModal);
  }, [isShowCountryCodeModal]);

  // 선택한 국가 코드 가져오기
  const onSelectedCountryCode = useCallback(
    (code: string) => {
      setSelectedCountryCode(code);
    },
    [selectedCountryCode],
  );

  const onSendCertificationCode = useCallback(async () => {
    try {
      console.log(selectedCountryCode, phoneNumber);
      const confirmation = await auth().signInWithPhoneNumber(
        `${selectedCountryCode}${phoneNumber}`,
      );
      console.log(confirmation.verificationId);
      setConfirm(confirmation.verificationId);
    } catch (error) {
      console.log(error);
    }
  }, [phoneNumber]);

  return (
    <PhoneVerification
      phoneNumber={phoneNumber}
      certificationCodeError={certificationCodeError}
      isPressedSendCertificationCode={isPressedSendCertificationCode}
      onAuthenticatePressed={onAuthenticatePressed}
      onSendCertificationCodePressed={onSendCertificationCodePressed}
      onCertificationCodeChanged={onCertificationCodeChanged}
      isShowCountryCodeModal={isShowCountryCodeModal}
      onShowCountryModal={onShowCountryModal}
      onSelectedCountryCode={onSelectedCountryCode}
      selectedCountryCode={selectedCountryCode}
      onPhoneNumberTextChange={onPhoneNumberTextChange}
    />
  );
};

export default PhoneVerificationContainer;
