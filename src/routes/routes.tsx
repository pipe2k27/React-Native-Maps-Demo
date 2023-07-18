import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navbar } from '../components';
import { Home, Login } from '../screens';

function Routes(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
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
