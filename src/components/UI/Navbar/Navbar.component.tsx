import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import { styles } from './Navbar.styles';

interface Props extends ViewProps {}

export const Navbar: React.FC<Props> = ({ style = {}, ...props }) => {
  const navbarStyles = [style, styles.navbar];

  return (
    <View style={navbarStyles} {...props}>
      <Text>Navbar</Text>
    </View>
  );
};
