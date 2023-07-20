import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';

export const LoadingSpinner = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <ActivityIndicator size="large" color="black" />
  </View>
);
