import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { AppErrorModal, LoadingSpinner, Navbar } from '../components';
import { Home, Login, MapPreview } from '../screens';
import { RootState } from '../redux';
import { commonLogout, setLoading } from '../utils';
import { setIsAuthenticated } from '../redux/common/login.slice';
import { PATHS } from './paths';

const Routes = (): JSX.Element => {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();
  const { isAuthenticated } = useSelector((state: RootState) => state.rootReducer.loginStatus);
  const { showSpinner } = useSelector((state: RootState) => state.rootReducer.commonComponents);

  const validateAuthenticated = async () => {
    try {
      setLoading(true);
      const AuthenticatedStorage = await AsyncStorage.getItem('isAuthenticated');
      if (AuthenticatedStorage === 'true') {
        dispatch(setIsAuthenticated(true));
        return;
      }
      dispatch(setIsAuthenticated(false));
      commonLogout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    validateAuthenticated();
  }, []);

  if (showSpinner) return <LoadingSpinner />;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PATHS.LOGIN}>
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name={PATHS.HOME}
              component={Home}
              options={{
                header: () => <Navbar />,
              }}
            />
            <Stack.Screen name={PATHS.MAP} component={MapPreview} />
          </>
        ) : (
          <Stack.Screen name={PATHS.LOGIN} component={Login} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
      <AppErrorModal />
    </NavigationContainer>
  );
};

export default Routes;
