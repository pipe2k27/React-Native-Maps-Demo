import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  tripWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 7,
    marginBottom: 0,
    paddingTop: 30,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray,
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.gray,
    marginLeft: 30,
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    lineHeight: 20,
  },
  textBig: {
    lineHeight: 36,
    marginHorizontal: 4,
  },
  checkText: {
    color: theme.colors.gray,
  },
  checkbox: {
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
    marginLeft: 10,
  },
  walk: {
    top: -3,
    left: 3,
  },
});
