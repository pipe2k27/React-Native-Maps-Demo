import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../redux';
import { login } from '../service/api.service';
import { setIsAuthenticated } from '../redux/common/login.slice';
import { setLoading } from './setLoading';
import { setAppError } from './setAppError';

interface Data {
  user: string;
  password: string;
}

export const commonLogin = async (data: Data, navigation: any) => {
  try {
    setLoading(true);
    const params = { user: data.user, password: data.password };
    const isValid = await login(params);
    if (isValid.status === 200) {
      AsyncStorage.setItem('isAuthenticated', 'true');
      store.dispatch(setIsAuthenticated(true));
      navigation.navigate('Home', {});
    }
  } catch (error: any) {
    setAppError('', 'ID/PASSでログイン出来ませんでした。');
  } finally {
    setLoading(false);
  }
};
