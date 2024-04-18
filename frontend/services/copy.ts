import axios, { AxiosResponse } from 'axios';
import { API_LINK } from './CommonDocs';
import { Redirect } from '../types/types';

export const copyTrades = async (currentUserId: string, targetUserId: string) => {
  const response: AxiosResponse<Redirect> = await axios.post<Redirect>(
    `http://${API_LINK}/portfolio?current_user_id=${currentUserId}&target_user_id=${targetUserId}`
  );
  return response.data;
};
