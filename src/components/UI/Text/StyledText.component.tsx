import React from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './StyledText.styles';

interface Props extends TextProps {
  white?: boolean;
  type1?: boolean;
  type2?: boolean;
  type3?: boolean;
  type4?: boolean;
  type5?: boolean;
  children: string;
}

export const StyledText: React.FC<Props> = ({
  white,
  type1,
  type2,
  type3,
  type4,
  type5,
  children,
  style = {},
  ...props
}) => {
  const textStyles = [
    styles.text,
    white && styles.white,
    type1 && styles.type1,
    type2 && styles.type2,
    type3 && styles.type3,
    type4 && styles.type4,
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};
