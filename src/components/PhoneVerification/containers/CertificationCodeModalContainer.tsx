import React from 'react';
import CertificationCodeModal from '../components/CertificationCodeModal';

type Props = {
  certificationCodeError: boolean;
  isPressedSendCertificationCode: boolean;
  onSendCertificationCodePressed: () => void;
  onCertificationCodeChanged: (code: string) => void;
  onAuthenticatePressed: () => void;
};

const CertificationCodeModalContainer = ({
  certificationCodeError,
  isPressedSendCertificationCode,
  onSendCertificationCodePressed,
  onCertificationCodeChanged,
  onAuthenticatePressed,
}: Props) => {
  return (
    <CertificationCodeModal
      certificationCodeError={certificationCodeError}
      isPressedSendCertificationCode={isPressedSendCertificationCode}
      onSendCertificationCodePressed={onSendCertificationCodePressed}
      onCertificationCodeChanged={onCertificationCodeChanged}
      onAuthenticatePressed={onAuthenticatePressed}
    />
  );
};

export default CertificationCodeModalContainer;
