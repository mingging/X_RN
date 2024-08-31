import React from 'react';
import CertificationCodeModal from '../components/CertificationCodeModal';

type Props = {
  isPressedSendCertificationCode: boolean;
  onSendCertificationCodePressed: () => void;
  onCertificationCodeChanged: (code: string) => void;
  onAuthenticatePressed: () => void;
};

const CertificationCodeModalContainer = ({
  isPressedSendCertificationCode,
  onSendCertificationCodePressed,
  onCertificationCodeChanged,
  onAuthenticatePressed,
}: Props) => {
  return (
    <CertificationCodeModal
      isPressedSendCertificationCode={isPressedSendCertificationCode}
      onSendCertificationCodePressed={onSendCertificationCodePressed}
      onCertificationCodeChanged={onCertificationCodeChanged}
      onAuthenticatePressed={onAuthenticatePressed}
    />
  );
};

export default CertificationCodeModalContainer;
