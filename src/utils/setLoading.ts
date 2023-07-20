import { store } from '../redux';
import { setShowSpinner } from '../redux/common/commonComponents.slice';

export const setLoading = (show: boolean) => {
  store.dispatch(setShowSpinner(show));
};
