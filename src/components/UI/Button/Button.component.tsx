import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { StyledText } from '../Text/StyledText.component';
import { styles } from './Button.styles';

interface Props extends TouchableOpacityProps {
  text: string;
  primary?: boolean;
  transparent?: boolean;
  type1?: boolean;
  type2?: boolean;
  type3?: boolean;
  type4?: boolean;
  type5?: boolean;
}

export const Button: React.FC<Props> = ({
  text,
  primary,
  transparent,
  type1,
  type2,
  type3,
  type4,
  type5,
  style = {},
  ...props
}) => {
  const buttonStyles = [primary && styles.primary, transparent && styles.transparent, style];

  const textStyles = {
    white: primary,
    grayLight: transparent,
    type1,
    type2,
    type3,
    type4,
    type5,
  };

  return (
    <TouchableOpacity style={buttonStyles} activeOpacity={0.7} {...props}>
      <StyledText {...textStyles} children={text} />
    </TouchableOpacity>
  );
};
