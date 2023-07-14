import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    primary: '#022d83',
    default: '#1a1a1a',
    greyDark1: '#8c8c8c',
    grey: '#dcdcdc',
    greyLigth1: '#f0f0f0',
    white: '#FFFFFF',
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
