import React, {useCallback, useRef, useState} from 'react';
import CertificationCodePad from '../components/CertificationCodePad';
import {TextInput} from 'react-native';

type Props = {
  onCertificationCodeChanged: (code: string) => void;
};

const CertificationCodePadContainer = ({onCertificationCodeChanged}: Props) => {
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]).current;

  const onCertificationCodeChange = useCallback(
    (text: string, index: number) => {
      const newCode = [...code];
      newCode[index] = text;

      // 마지막 자리수가 아니면 다음 자리수로 넘어가기
      if (text.length > 1) {
        text.split('').forEach((char, index) => {
          newCode[index + 1] = char;
        });
      }

      setCode(newCode);
      onCertificationCodeChanged(newCode.join(''));

      // 다음 자리수로 넘어가기
      if (text.length === 1 && index < code.length - 1) {
        inputs[index + 1]?.focus();
      }

      // 이전 자리수로 넘어가기
      if (text.length === 0 && index > 0) {
        inputs[index - 1]?.focus();
      }
    },
    [code],
  );

  const onBackKeyPressed = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '') {
      if (index > 0) {
        inputs[index - 1]?.focus();
      }
    }
  };

  return (
    <CertificationCodePad
      code={code}
      inputs={{current: inputs}}
      onCertificationCodeChange={onCertificationCodeChange}
      onBackKeyPressed={onBackKeyPressed}
    />
  );
};

export default CertificationCodePadContainer;
