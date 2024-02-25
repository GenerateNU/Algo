import axios, { AxiosResponse } from 'axios';
import { API_LINK } from './CommonDocs';
import { Redirect, User } from '../types/types';

export const getAllUsers = async (): Promise<User[]> => {
  console.log(API_LINK);
  const response: AxiosResponse<User[]> = await axios.get<User[]>(
    `http://${API_LINK}/users`,
  );
  console.log(response.data);
  return response.data;
};

export const getCallbackUrl = async (id: number): Promise<Redirect> => {
  const response: AxiosResponse<Redirect> = await axios.get<Redirect>(
    `http://${API_LINK}/users/etrade-redirect/${id}`,
  );
  console.log(response.data);
  return response.data;
};

export const testClerkAuth = async (sessionToken: string) => {
  console.log(sessionToken);
  const response: AxiosResponse<Redirect> = await axios.post<Redirect>(
    `http://${API_LINK}/auth`,
    {
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Authorization': `Bearer ${sessionToken}`,
      // },
      body: {
        sessionToken: sessionToken,
      }
    },
  );
  console.log(response.data);
  return response.data;
};
