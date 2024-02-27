import axios, { AxiosResponse, HttpStatusCode } from 'axios';
import { API_LINK } from './CommonDocs';
import { FinancialGoal, Redirect, TokenStatus, User } from '../types/types';

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
    `http://${API_LINK}/etrade/redirect/${id}`,
  );
  console.log(response.data);
  return response.data;
};

export const verifyToken = async (
  id: number,
  verifier: string,
): Promise<HttpStatusCode> => {
  const response: AxiosResponse = await axios.post<Redirect>(
    `http://${API_LINK}/etrade/verify/${id}`,
    { verifier: verifier },
  );
  return response.status;
};

export const getTokenStatus = async (id: number): Promise<TokenStatus> => {
  const response: AxiosResponse = await axios.get<TokenStatus>(
    `http://${API_LINK}/etrade/status/${id}`,
  );
  return response.data;
};

export const registerUser = async (
  user: User,
  shortTermGoals: Array<FinancialGoal>,
  longTermGoals: Array<FinancialGoal>,
): Promise<User> => {
  const response: AxiosResponse<User> = await axios.post<User>(
    `http://${API_LINK}/users/onboard`,
    {
      User: user,
      ShortTermGoals: shortTermGoals,
      LongTermGoals: longTermGoals,
    },
  );
  console.log(JSON.stringify(response));
  return response.data;
};
