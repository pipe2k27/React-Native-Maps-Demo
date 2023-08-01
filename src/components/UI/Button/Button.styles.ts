import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  default: {
    alignItems: 'center',
  },
  primary: {
    minHeight: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.regular,
    paddingHorizontal: 15,
  },
  transparent: {
    minHeight: 30,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 0,
  },
});
