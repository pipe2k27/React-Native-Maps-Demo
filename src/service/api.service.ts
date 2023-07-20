import { AxiosResponse } from 'axios';
import axios from './axiosInstance.service';

export const login = (params: any): Promise<AxiosResponse<any>> =>
  axios.post(`/auth/login`, params);

export const logout = (params?: any): Promise<AxiosResponse<any>> =>
  axios.post(`/auth/logout`, params);
