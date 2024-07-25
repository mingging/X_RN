import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type CommonStackParamsListTypes = {
  login: undefined;
  register: undefined;
  email: undefined;
};

export type CommonStackNavigationTypes =
  NativeStackNavigationProp<CommonStackParamsListTypes>;

// export type ZeroWasteDetailStackParamTypes = NativeStackScreenProps<
//   CommonStackParamsListTypes,
//   'zeroWasteDetail'
// >;
