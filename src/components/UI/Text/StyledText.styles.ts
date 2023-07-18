import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  defaultTextStyle: {
    color: theme.colors.default,
    letterSpacing: theme.letterSpacing.default,
    fontFamily: theme.fontWeight.regular,
    fontSize: theme.fontSize.default,
    // lineHeight: theme.lineHeight.default,
  },

  // Font Size

  xl: {
    // should this be bold ?
    fontFamily: theme.fontWeight.regular, //
    fontSize: theme.fontSize.xl,
  },
  lg: {
    fontFamily: theme.fontWeight.regular,
    fontSize: theme.fontSize.lg,
  },
  sm: {
    fontFamily: theme.fontWeight.regular,
    fontSize: theme.fontSize.sm,
  },
  xs: {
    fontFamily: theme.fontWeight.regular,
    fontSize: theme.fontSize.xs,
  },

  // Colors
  white: {
    color: theme.colors.white,
  },
  gray: {
    color: theme.colors.gray,
  },
  grayDark: {
    color: theme.colors.grayDark,
  },
  primary: {
    color: theme.colors.primary,
  },
  grayLight: {
    color: theme.colors.grayLight,
  },

  // Font Weight
  bold: {
    fontFamily: theme.fontWeight.bold,
  },
});
