import React from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './StyledText.styles';

interface Props extends TextProps {
  white?: boolean;
  primary?: boolean;
  grayDark?: boolean;
  gray?: boolean;
  grayLight?: boolean;
  xl?: boolean;
  lg?: boolean;
  sm?: boolean;
  xs?: boolean;
  bold?: boolean;
  children: string;
}

export const StyledText: React.FC<Props> = ({
  white,
  primary,
  grayLight,
  grayDark,
  gray,
  xl,
  lg,
  sm,
  xs,
  bold,
  children,
  style = {},
  ...props
}) => {
  const textStyles = [
    styles.defaultTextStyle,
    white && styles.white,
    grayLight && styles.grayLight,
    grayDark && styles.grayDark,
    gray && styles.gray,
    primary && styles.primary,
    xl && styles.xl,
    lg && styles.lg,
    sm && styles.sm,
    xs && styles.xs,
    bold && styles.bold,
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};
