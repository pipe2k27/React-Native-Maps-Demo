import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginReducer from './common/login.slice';
import commonComponentReducer from './common/commonComponents.slice';

const appReducer = combineReducers({
  loginStatus: loginReducer,
  commonComponents: commonComponentReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'SIGN_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: { rootReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
