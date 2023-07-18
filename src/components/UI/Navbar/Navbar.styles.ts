import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  navbar: {
    paddingTop: 10,
    backgroundColor: theme.colors.primary,
    opacity: 1,
  },
  logosContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 1,
    height: 10,
    marginLeft: 10,
    backgroundColor: theme.colors.white,
  },
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  navbarTextContainer: {
    paddingLeft: 40,
    paddingTop: 20,
  },
  textColorGrey: {
    color: theme.colors.grayDark,
    lineHeight: 18,
  },
  navTextSubTitle: {
    color: theme.colors.white,
    lineHeight: 18,
  },
  navTextTitle: {
    fontSize: 24,
    color: theme.colors.white,
    lineHeight: 24,
    paddingTop: 4,
    paddingBottom: 10,
  },
  dateTimePicker: {
    paddingBottom: 14,
    paddingRight: 20,
  },
});
