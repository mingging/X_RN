import colors from '@assets/colors';
import Pretendard from '@assets/fonts';
import React, {useCallback} from 'react';
import {View, TextInput} from 'react-native';

type Props = {
  code: string[];
  inputs: React.RefObject<(TextInput | null)[]>;
  onCertificationCodeChange: (text: string, index: number) => void;
  onBackKeyPressed: (e: any, index: number) => void;
};

const CertificationCodePad = ({
  code,
  inputs,
  onCertificationCodeChange,
  onBackKeyPressed,
}: Props) => {
  const renderInputs = useCallback(() => {
    return code.map((value, index) => (
      <TextInput
        key={index}
        value={value}
        onChangeText={text => onCertificationCodeChange(text, index)}
        onKeyPress={e => onBackKeyPressed(e, index)}
        keyboardType="number-pad"
        maxLength={1}
        ref={ref => {
          if (inputs.current) inputs.current[index] = ref;
        }}
        style={[
          Pretendard.SemiBold,
          {
            borderBottomWidth: 3,
            borderBottomColor: colors.FFFFFF,
            width: 52,
            color: colors.FFFFFF,
            fontSize: 42,
            textAlign: 'center',
            paddingBottom: 10,
          },
        ]}
      />
    ));
  }, [code]);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        // paddingHorizontal: 20,
        // paddingVertical: 10,
      }}>
      {renderInputs()}
    </View>
  );
};

export default CertificationCodePad;
