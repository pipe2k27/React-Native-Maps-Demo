import React from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import { SearchIcon } from '../../../assets';
import { styles } from './StyledTextInput.styles';

interface StyledTextInputProp extends TextInputProps {
  error?: string;
  errorMessage?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

export const StyledTextInput: React.FC<StyledTextInputProp> = ({
  error,
  style = {},
  leftIcon,
  rightIcon,
  ...props
}) => {
  const inputStyle = [styles.textInput, style, !!error && styles.error];

  return (
    <View style={styles.inputWrapper}>
      {leftIcon ? <View style={{ marginRight: 8 }}>{leftIcon}</View> : null}
      <TextInput style={inputStyle} placeholderTextColor={'#cecece'} {...props} />
      {rightIcon ? rightIcon : null}
    </View>
  );
};
