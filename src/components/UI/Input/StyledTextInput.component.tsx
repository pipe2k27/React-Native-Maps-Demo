import React, { forwardRef } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData, View } from 'react-native';
import { styles } from './StyledTextInput.styles';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

interface StyledTextInputProp extends ViewProps {
  error?: string;
  errorMessage?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  placeholder?: string;
  ref?: any;
  isSearchActive?: boolean;
  value?: string;
  secureTextEntry?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  onPressIn?: () => void;
  scrollToChild?: () => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

export const StyledTextInput: React.FC<StyledTextInputProp> = forwardRef(
  (
    {
      error,
      style = {},
      leftIcon,
      rightIcon,
      placeholder,
      onChangeText,
      onBlur,
      onPressIn,
      isSearchActive,
      scrollToChild,
      onFocus,
      value,
      onChange,
      secureTextEntry,
      ...props
    },
    ref
  ) => {
    const inputStyle = [styles.inputWrapper, style, !!error && styles.error];

    return (
      <View style={inputStyle}>
        {leftIcon ? <View style={{ marginRight: 8 }}>{leftIcon}</View> : null}
        <TextInput
          ref={ref && ref}
          value={value}
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={'#cecece'}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          onBlur={onBlur && onBlur}
          onFocus={onFocus && onFocus}
          onPressIn={onPressIn && onPressIn}
          onChange={onChange && onChange}
          {...props}
        />
        {rightIcon ? rightIcon : null}
      </View>
    );
  }
);
