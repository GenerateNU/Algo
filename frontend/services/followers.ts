import { User } from '../types/types';
import axios, { AxiosResponse } from 'axios';
import { API_LINK } from './CommonDocs';

export const getUserFollowers = async (id: string): Promise<User[]> => {
  const response: AxiosResponse = await axios.get<User[]>(
    `http://${API_LINK}/followers/${id}`,
  );
  return response.data;
};

export const getUserFollowing = async (id: string): Promise<User[]> => {
  const response: AxiosResponse = await axios.get<User[]>(
    `http://${API_LINK}/timelines/${id}`,
  );
  return response.data;
};