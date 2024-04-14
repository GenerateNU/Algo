import axios, { AxiosResponse } from 'axios';
import { API_LINK } from './CommonDocs';
import { FinancialGoal, User } from '../types/types';

export const getAllUsers = async (): Promise<User[]> => {
  console.log(API_LINK);
  const response: AxiosResponse<User[]> = await axios.get<User[]>(
    `http://${API_LINK}/users`,
  );
  // console.log(response.data);
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
  // console.log(JSON.stringify(response));
  return response.data;
};
