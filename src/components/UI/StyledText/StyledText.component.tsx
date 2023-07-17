import React from 'react';
import { Text, View, TextProps } from 'react-native';
import { styles } from './StyledText.styles';

interface Props extends TextProps {
  type1?: boolean;
  type2?: boolean;
  type3?: boolean;
  type4?: boolean;
  type5?: boolean;
  subtitle?: boolean;
  children: string;
}

export const StyledText: React.FC<Props> = ({
  type1,
  type2,
  type3,
  type4,
  type5,
  subtitle,
  children,
  style = {},
  ...props
}) => {
  const textStyles = [
    styles.text,
    type1 && styles.type1,
    type2 && styles.type2,
    type3 && styles.type3,
    type4 && styles.type4,
    subtitle && styles.subtitle,
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};
