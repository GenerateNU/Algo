import axios, { AxiosResponse } from 'axios';
import { API_LINK } from './CommonDocs';
import { FinancialGoal, User } from '../types/types';

export const getAllUsers = async (): Promise<User[]> => {
  console.log(API_LINK);
  const response: AxiosResponse<User[]> = await axios.get<User[]>(
    `http://${API_LINK}/users`,
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