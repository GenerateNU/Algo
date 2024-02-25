import axios, { AxiosResponse } from 'axios';
import { API_LINK } from './CommonDocs';
import { Redirect } from '../types/types';

export const authenticateSession = async (sessionToken: string) => {
  const response: AxiosResponse<Redirect> = await axios.post<Redirect>(
    `http://${API_LINK}/auth/authenticate`,
    {
      body: {
        sessionToken: sessionToken,
      },
    },
  );
  return response.data;
};
