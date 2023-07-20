import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';
import { cloneElement } from 'react';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalView: {
    margin: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    padding: 0,
    paddingHorizontal: 70,
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 2,
  },
  text: {
    textAlign: 'center',
    padding: 0,
  },
  message: {
    paddingHorizontal: 30,
  },
  btnContainer: {
    padding: 10,
  },
});
