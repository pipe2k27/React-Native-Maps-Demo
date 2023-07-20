import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LoginState = {
  isAuthenticated: boolean;
  activeUser: string;
  loginData: any;
};

const initialState: LoginState = {
  isAuthenticated: false,
  activeUser: '',
  loginData: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsAuthenticated: (state: any, action: PayloadAction<any>) => {
      state.isAuthenticated = action.payload;
    },
    setActiveUser: (state: any, action: PayloadAction<any>) => {
      state.activeUser = action.payload;
    },
    setLoginData: (state: any, action: PayloadAction<any>) => {
      state.loginData = action.payload;
    },
    resetLoginState: (state: any) => {
      state.isAuthenticated = initialState.isAuthenticated;
    },
  },
});

export const { setIsAuthenticated, setActiveUser, setLoginData, resetLoginState } =
  loginSlice.actions;

export default loginSlice.reducer;
