import React, { ReactComponentElement, ReactElement } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { StyledText } from '../Text/StyledText.component';
import { styles } from './Button.styles';
import { Image } from 'react-native-svg';

interface Props extends TouchableOpacityProps {
  text: string;
  primary?: boolean;
  transparent?: boolean;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  variation?: 'primary' | 'transparent';
}

export const Button: React.FC<Props> = ({
  text,
  primary,
  transparent,
  style = {},
  children,
  iconLeft,
  iconRight,
  variation,
  ...props
}) => {
  const textStyles = {
    primary: variation !== 'primary',
    white: variation === 'primary',
    lineHeightPrimary: true,
  };

  return (
    <TouchableOpacity style={[styles.default, variation ? styles[variation] : {}]} {...props}>
      <View style={{ flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center' }}>
        {iconLeft ? iconLeft : null}
        <StyledText {...textStyles} children={text} style={{ marginHorizontal: 10 }} />
        {iconRight ? iconRight : null}
      </View>
    </TouchableOpacity>
  );
};
