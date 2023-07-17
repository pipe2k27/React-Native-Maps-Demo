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
    width: width > 450 ? 675 : 600,
    height: 300,
    backgroundColor: '#1C3180',
    transform: [{ rotate: '20deg' }],
    position: 'relative',
    top: -110,
    left: -100,
  },
  formContainer: {
    marginHorizontal: 30,
    position: 'relative',
    top: width > 450 ? 0 : -20,
  },
  label: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.primary,
  },
  input: {
    height: 50,
    fontSize: theme.fontSize.type4,
    marginBottom: 16,
    paddingLeft: 16,
    paddingVertical: 0,
  },
  bottomlogo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 38,
  },
});
