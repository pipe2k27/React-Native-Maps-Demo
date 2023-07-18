import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderRadius: theme.borderRadius.regular,
    borderWidth: 1,
    textAlignVertical: 'center',
    paddingLeft: 16,
  },
  error: {
    borderColor: theme.colors.error,
  },
});
