import { Redirect, TokenStatus, UserPortfolio } from '../types/types';
import axios, { AxiosResponse, HttpStatusCode } from 'axios';
import { API_LINK } from './CommonDocs';

export const getCallbackUrl = async (id: string): Promise<Redirect> => {
  const response: AxiosResponse<Redirect> = await axios.get<Redirect>(
    `http://${API_LINK}/etrade/redirect/${id}`,
  );
  return response.data;
};


export const getTokenStatus = async (id: string): Promise<TokenStatus> => {
  const response: AxiosResponse = await axios.get<TokenStatus>(
    `http://${API_LINK}/etrade/status/${id}`,
  );
  return response.data;
};

export const verifyToken = async (
  id: string,
  verifier: string,
): Promise<HttpStatusCode> => {
  const response: AxiosResponse = await axios.post<Redirect>(
    `http://${API_LINK}/etrade/verify/${id}`,
    { verifier: verifier },
  );
  return response.status;
};

export const getPortoflio = async (id: string): Promise<UserPortfolio> => {
  const response: AxiosResponse<UserPortfolio> = await axios.get<UserPortfolio>(
    `http://${API_LINK}/etrade/portfolio/${id}`,
  );
  return response.data;
}
