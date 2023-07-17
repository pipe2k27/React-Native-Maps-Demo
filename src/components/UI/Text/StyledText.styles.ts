import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  text: {
    color: theme.colors.default,
    letterSpacing: theme.letterSpacing.default,
    fontFamily: theme.fontFamily.primary,
    // lineHeight: theme.lineHeight.default,
  },
  type1: {
    fontFamily: theme.fontFamily.primaryBold,
    fontSize: theme.fontSize.type1,
  },
  type2: {
    fontFamily: theme.fontFamily.primary,
    fontSize: theme.fontSize.type2,
  },
  type3: {
    fontFamily: theme.fontFamily.primary,
    fontSize: theme.fontSize.type3,
  },
  type4: {
    fontFamily: theme.fontFamily.primary,
    fontSize: theme.fontSize.type4,
  },
  type5: {
    fontFamily: theme.fontFamily.primary,
    fontSize: theme.fontSize.type5,
  },
  white: {
    color: theme.colors.white,
  },
  grayLight: {
    color: theme.colors.grayDark1,
  },
});
