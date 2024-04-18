import axios, { AxiosResponse } from 'axios';
import { API_LINK } from './CommonDocs';
import { FinancialGoal, Post, TokenStatus, User } from '../types/types';

export const getAllUsers = async (): Promise<User[]> => {
  console.log(API_LINK);
  const response: AxiosResponse<User[]> = await axios.get<User[]>(
    `http://${API_LINK}/users`,
  );
  return response.data;
};

export const getPosts = async (): Promise<Post[]> => {
  const response: AxiosResponse<Post[]> = await axios.get<Post[]>(
    `http://${API_LINK}/posts`,
  );

  return response.data;
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
  return response.data;
};

export const getUserById = async (id: string): Promise<User> => {
  const response: AxiosResponse<User> = await axios.get<User>(
    `http://${API_LINK}/users/${id}`,
  );
  return response.data;
};