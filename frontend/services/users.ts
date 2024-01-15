import axios, { AxiosResponse } from 'axios';
import { API_LINK } from './CommonDocs';
import { User } from '../types/types';

export const getAllUsers = async (): Promise<User[]>  => {
    console.log(API_LINK)
    const response: AxiosResponse<User[]> = await axios.get<User[]>(`${API_LINK}/users`);
    console.log(response.data)
    return response.data;
}