import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  inputWrapper: {
    borderRadius: theme.borderRadius.regular,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 14,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    textAlignVertical: 'center',
    color: theme.colors.default,
  },
  error: {
    borderColor: theme.colors.error,
  },
});
