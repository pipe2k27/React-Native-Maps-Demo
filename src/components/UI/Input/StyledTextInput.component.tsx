import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './StyledTextInput.styles';

interface StyledTextInputProp extends TextInputProps {
  error?: string;
  errorMessage?: string;
}

export const StyledTextInput: React.FC<StyledTextInputProp> = ({ error, style = {}, ...props }) => {
  const inputStyle = [styles.textInput, style, !!error && styles.error];

  return <TextInput style={inputStyle} placeholderTextColor={'#cecece'} multiline {...props} />;
};
