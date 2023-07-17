import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  primary: {
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.regular,
    paddingHorizontal: 15,
  },
  transparent: {
    height: 30,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 0,
  },
});
