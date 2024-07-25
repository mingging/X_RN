import React, { useState, useCallback } from 'react';
import Register from '../Register';
import { useNavigation } from '@react-navigation/native';
import { CommonStackNavigationTypes } from '@typedef/routes/common.stack.types';

const RegisterContainer = () => {
    const navigation = useNavigation<CommonStackNavigationTypes>();

    const [isPressedSendCertificationCode, setIsPressedSendCertificationCode] = useState(false);
    const [certificationCode, setCertificationCode] = useState('');

    // 행동을 직역으로 표시
    // true 인 걸 모르기 때문에 변수가 바뀌는 지 모른다.
    // useCallback 은 dependency 가 중요하다
    // useCallback 없이 함수를 사용하면, 리프레쉬 될 때마다 함수가 계속 렌더링 된다.
    // 메모리 누수가 심각해진다.
    // useCallback 을 반드시 써줘야한다. -> 기본적인 최적화
    const onCertificationCodeChanged = useCallback((code: string) => {
        setCertificationCode(code);
    }, [certificationCode])

    const onAuthenticatePressed = useCallback(() => {
        console.log(certificationCode);
    }, [certificationCode])

    // 동일한 변수명으로 작성 -> 매핑이 되어야 한다! (중요!)
    const onSendCertificationCodePressed = useCallback(() => {
        setIsPressedSendCertificationCode(!isPressedSendCertificationCode)
    }, [isPressedSendCertificationCode])

    const onEmailAuthenticationPressed = useCallback(() => {
        navigation.navigate('email');
    }, [navigation]);

    return (
        <Register
            isPressedSendCertificationCode={isPressedSendCertificationCode}
            onAuthenticatePressed={onAuthenticatePressed}
            onSendCertificationCodePressed={onSendCertificationCodePressed}
            onEmailAuthenticationPressed={onEmailAuthenticationPressed}
            onCertificationCodeChanged={onCertificationCodeChanged}
        />
    )
};

export default RegisterContainer;