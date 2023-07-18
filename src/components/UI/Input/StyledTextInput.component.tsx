import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './StyledTextInput.styles';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

interface StyledTextInputProp extends ViewProps {
  error?: string;
  errorMessage?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  placeholder?: string;
}

export const StyledTextInput: React.FC<StyledTextInputProp> = ({
  error,
  style = {},
  leftIcon,
  rightIcon,
  placeholder,
  ...props
}) => {
  const inputStyle = [styles.inputWrapper, style, !!error && styles.error];

  return (
    <View style={inputStyle}>
      {leftIcon ? <View style={{ marginRight: 8 }}>{leftIcon}</View> : null}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={'#cecece'}
        {...props}
      />
      {rightIcon ? rightIcon : null}
    </View>
  );
};
