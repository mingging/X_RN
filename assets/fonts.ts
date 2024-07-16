import {Platform, StyleProp, TextStyle} from 'react-native';

const ANROID_LINEHEIGHT_RATE = 1.5;

type FontStructureType = 'fontFamily' | 'fontWeight' | 'includeFontPadding';

type FontContainerTypes = {
  Light: StyleProp<Pick<TextStyle, FontStructureType>>;
  Regular: StyleProp<Pick<TextStyle, FontStructureType>>;
  Medium: StyleProp<Pick<TextStyle, FontStructureType>>;
  SemiBold: StyleProp<Pick<TextStyle, FontStructureType>>;
  Bold: StyleProp<Pick<TextStyle, FontStructureType>>;
  Toss: StyleProp<Pick<TextStyle, FontStructureType>>;
};

const Pretendard: FontContainerTypes = {
  Light: {
    fontFamily: 'Pretendard-Light',
    includeFontPadding: false,
  },
  Regular: {
    fontFamily: 'Pretendard-Regular',
    includeFontPadding: false,
  },
  Medium: {
    fontFamily: 'Pretendard-Medium',
    includeFontPadding: false,
  },
  SemiBold: {
    fontFamily: 'Pretendard-SemiBold',
    includeFontPadding: false,
  },
  Bold: {
    fontFamily: 'Pretendard-Bold',
    includeFontPadding: false,
  },
  Toss: {
    fontFamily: 'TossFaceFontMac',
    includeFontPadding: false,
  },
};

export default Pretendard;
