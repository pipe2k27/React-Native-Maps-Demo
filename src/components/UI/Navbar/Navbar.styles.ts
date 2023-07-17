import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { theme } from '../../../theme';

const windowHeight = Dimensions.get('window').height;
const height = windowHeight * 0.25;

export const styles = StyleSheet.create({
  navbar: {
    height: height,
    backgroundColor: theme.colors.primary,
    opacity: 1,
  },
});
