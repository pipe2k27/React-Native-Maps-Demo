import { Dimensions, StyleSheet } from 'react-native';

export const getStyles = () => {
  const { height } = Dimensions.get('window');

  return StyleSheet.create({
    container: {
      padding: 10,
    },
    wrapper: {
      borderRadius: 15,
      borderWidth: 0.5,
      overflow: 'hidden',
    },
    map: {
      height: height - 95,
    },
  });
};
