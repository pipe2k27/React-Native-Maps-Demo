import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  logoContainer: {
    width: '55%',
    height: 60,
    position: 'absolute',
    top: 60,
    zIndex: 1,
    alignSelf: 'center',
  },

  backgroundImage: {
    width: width * 1.5,
    height: 300,
    backgroundColor: theme.colors.primary,
    transform: [{ rotate: '20deg' }],
    position: 'relative',
    top: -110,
    left: -100,
  },
  formContainer: {
    marginHorizontal: 30,
    position: 'relative',
    top: width > 450 ? 25 : -10,
  },
  label: {
    color: theme.colors.primary,
    lineHeight: theme.fontSize.lg,
    marginBottom: 9,
  },
  input: {
    marginBottom: 25,
  },
  bottomlogo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 38,
  },
});
