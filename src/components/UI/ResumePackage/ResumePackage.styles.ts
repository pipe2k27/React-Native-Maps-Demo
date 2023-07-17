import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  underline: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    width: 70,
    margin: 0,
    padding: 0,
  },
  resume: {
    width: 270,
    paddingVertical: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
