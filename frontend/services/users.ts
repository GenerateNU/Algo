import axios, { AxiosResponse } from 'axios';
import { API_LINK } from './CommonURLS';
import { User } from '../types/types';

export const getAllUsers = async (): Promise<User[]>  => {
    const response: AxiosResponse<User[]> = await axios.get<User[]>(`${API_LINK}/users`);
    return response.data;
}