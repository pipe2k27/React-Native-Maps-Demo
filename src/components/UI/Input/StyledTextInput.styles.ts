import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  textInput: {
    fontFamily: theme.fontFamily.primary,
    borderRadius: theme.borderRadius.regular,
    borderWidth: 1,
    borderColor: theme.colors.grayDark1,
    textAlignVertical: 'center',
    padding: 10,
  },
  error: {
    borderColor: theme.colors.error,
  },
});
