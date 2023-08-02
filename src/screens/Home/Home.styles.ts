import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: theme.colors.white,
    width: '100%',
    overflow: 'scroll',
    minHeight: height - 100,
  },
  sticky: {
    backgroundColor: theme.colors.white,
    padding: 20,
  },
  input: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
  },
  list: {
    padding: 20,
  },
  btn: {
    backgroundColor: '#457b9d',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },
  text: {
    color: '#fff',
  },
  extraPadding: {
    paddingBottom: height - 260,
  },
  bottomContainer: {
    width: width,
    backgroundColor: theme.colors.white,
    padding: 10,
  },
});
