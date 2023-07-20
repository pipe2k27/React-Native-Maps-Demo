import AsyncStorage from '@react-native-async-storage/async-storage';
import { resetCommonComponents } from '../redux/common/commonComponents.slice';
import { resetLoginState } from '../redux/common/login.slice';
import { logout } from '../service/api.service';
import { setAppError } from './setAppError';
import { store } from '../redux';

export const commonLogout = async () => {
  try {
    const isLoggedOut = await logout();
    if (isLoggedOut) {
      store.dispatch(resetLoginState());
      store.dispatch(resetCommonComponents());
      AsyncStorage.removeItem('isAuthenticated');
    }
  } catch (error: any) {
    setAppError(error?.code, error?.message);
  }
};
