import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    primary: '#1C3180',
    default: '#1a1a1a',
    grayDark1: '#8c8c8c',
    gray: '#dcdcdc',
    grayLigth1: '#f0f0f0',
    grayLigth2: '#cecece',
    white: '#FFFFFF',
    error: 'red',
  },
  fontSize: {
    type1: 32,
    type2: 20,
    type3: 16,
    type4: 12,
    type5: 8,
  },
  fontWeigth: {
    default: '400',
    title: '700',
  },
  fontFamily: {
    primary: 'NotoSansJP-Regular',
    primaryBold: 'NotoSansJP-Bold',
  },
  borderRadius: {
    regular: 4,
  },
  lineHeight: {
    default: 18,
  },
  letterSpacing: {
    default: -0.165,
  },
};

export const commonStyles = StyleSheet.create({
  containerStyle: {},
});
