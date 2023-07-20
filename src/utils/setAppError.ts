import { store } from '../redux';
import { setAppErrorModal } from '../redux/common/commonComponents.slice';

export const setAppError = (title: string, message: string, show = true) => {
  store.dispatch(setAppErrorModal({ show, title, message }));
};
