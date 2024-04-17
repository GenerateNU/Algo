import axios, { AxiosResponse } from 'axios';
import { API_LINK } from './CommonDocs';
import { Leader, Trending } from '../types/types';

export const getPopularLeaderboard = async (): Promise<Leader[]> => {
    const response: AxiosResponse<Leader[]> = await axios.get<Leader[]>(
        `http://${API_LINK}/leaders/`,
    );
    console.log(response.data);
    return response.data;
}

export const getPopularTrending = async (): Promise<Trending[]> => {
    const response: AxiosResponse<Trending[]> = await axios.get<Trending[]>(
        `http://${API_LINK}/trending/`,
    );
    console.log(response.data);
    return response.data;
}
