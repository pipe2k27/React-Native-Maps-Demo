import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { StyledText } from '../Text/StyledText.component';
import { styles } from './AppErrorModal.styles';
import { Button } from '../Button/Button.component';
import { setAppError } from '../../../utils';

export const AppErrorModal = () => {
  const { show, title, message } = useSelector(
    (state: RootState) => state.rootReducer.commonComponents.errorModal
  );

  return (
    <Modal animationType="fade" visible={show} transparent={true}>
      <View style={styles.modal}>
        <Pressable style={styles.centeredView} onPress={() => setAppError('', '', false)}>
          <View style={styles.modalView}>
            <View style={styles.title}>
              <StyledText lg style={styles.text}>
                {title || 'An error has ocurred'}
              </StyledText>
            </View>
            <View style={styles.message}>
              <StyledText>{message || ''}</StyledText>
            </View>
            <View style={styles.btnContainer}>
              <Button text="Close" primary onPress={() => setAppError('', '', false)} />
            </View>
          </View>
        </Pressable>
      </View>
    </Modal>
  );
};
