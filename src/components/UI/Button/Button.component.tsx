import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { StyledText } from '../Text/StyledText.component';
import { styles } from './Button.styles';

interface Props extends TouchableOpacityProps {
  text: string;
  primary?: boolean;
  transparent?: boolean;
  xl?: boolean;
  lg?: boolean;
  type3?: boolean;
  sm?: boolean;
  type5?: boolean;
}

export const Button: React.FC<Props> = ({
  text,
  primary,
  transparent,
  xl,
  lg,
  type3,
  sm,
  type5,
  style = {},
  ...props
}) => {
  const buttonStyles = [primary && styles.primary, transparent && styles.transparent, style];

  const textStyles = {
    white: primary,
    grayLight: transparent,
    xl,
    lg,
    type3,
    sm,
    type5,
  };

  return (
    <TouchableOpacity style={buttonStyles} activeOpacity={0.7} {...props}>
      <StyledText {...textStyles} children={text} />
    </TouchableOpacity>
  );
};
