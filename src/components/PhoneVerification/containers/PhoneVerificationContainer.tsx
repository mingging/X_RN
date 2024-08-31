import React, {useCallback, useState} from 'react';
import PhoneVerification from '../PhoneVerification';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

// 인증번호 -> 이메일 인증 나누고 linkWithCredential 이용해서 합치기
const PhoneVerificationContainer = () => {
  const [isPressedSendCertificationCode, setIsPressedSendCertificationCode] =
    useState(false);
  const [certificationCode, setCertificationCode] = useState('');
  const [isShowCountryCodeModal, setIsShowCountryCodeModal] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+82');

  const [phoneNumber, setPhoneNumber] = useState('');

  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult>();

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

      // 인증코드 입력
      onCertificationCode();
    },
    [certificationCode],
  );

  const onCertificationCode = useCallback(async () => {
    try {
      if (confirm) {
        await confirm.confirm(certificationCode);
      }
    } catch (error) {
      console.log(error);
    }
  }, [confirm]);

  const onAuthenticatePressed = useCallback(() => {
    setIsPressedSendCertificationCode(false);
  }, [certificationCode]);

  const onSendCertificationCodePressed = useCallback(() => {
    setIsPressedSendCertificationCode(!isPressedSendCertificationCode);

    // 인증 코드 전송
    onSendCertificationCode();
  }, [isPressedSendCertificationCode]);

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
      const confirmation = await auth().signInWithPhoneNumber(
        `${selectedCountryCode} ${phoneNumber}`,
      );
      // setConfirm(confirmation);
    } catch (error) {
      console.log(error);
    }
  }, [phoneNumber]);

  return (
    <PhoneVerification
      phoneNumber={phoneNumber}
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
