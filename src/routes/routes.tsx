import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/Home.page';
import { Navbar } from '../components';
import { theme } from '../theme';

function Routes(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Navbar />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
