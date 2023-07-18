import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    primary: '#1C3180',
    default: '#1a1a1a',
    grayDark: '#8c8c8c',
    gray: '#dcdcdc',
    grayLight: '#f0f0f0',
    white: '#FFFFFF',
    error: 'red',
  },
  fontSize: {
    xl: 32,
    lg: 20,
    default: 16,
    sm: 12,
    xs: 8,
  },
  fontWeight: {
    regular: 'NotoSansJP-Regular',
    bold: 'NotoSansJP-Bold',
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
