import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type CommonStackParamsListTypes = {
  login: undefined;
  phoneVerification: undefined;
  register: undefined;
  emailVerification: {
    data: {
      email: string;
      password: string;
    };
  };
  registerComplete: undefined;
  sendPasswordReset: undefined;
  sendPasswordResetComplete: {
    data: {
      email: string; // 비밀번호 재설정 메일을 보낸 이메일
    };
  };
};

export type CommonStackNavigationTypes =
  NativeStackNavigationProp<CommonStackParamsListTypes>;

// 비밀번호 재설정 완료 화면
export type SendPasswordResetCompleteStackParamTypes = NativeStackScreenProps<
  CommonStackParamsListTypes,
  'sendPasswordResetComplete'
>;

// 이메일 인증 화면
export type EmailVerificationStackParamTypes = NativeStackScreenProps<
  CommonStackParamsListTypes,
  'emailVerification'
>;
