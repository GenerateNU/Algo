import axios, { AxiosResponse } from 'axios';
import { API_LINK } from './CommonDocs';
import { Leader } from '../types/types';

export const getPopularLeaderboard = async (): Promise<Leader[]> => {
    const response: AxiosResponse<Leader[]> = await axios.get<Leader[]>(
        `http://${API_LINK}/leaders/`,
    );
    console.log(response.data);
    return response.data;
}
