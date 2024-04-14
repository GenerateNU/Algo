import { Redirect, UserPortfolio } from '../types/types';
import axios, { AxiosResponse, HttpStatusCode } from 'axios';
import { API_LINK } from './CommonDocs';

export const createTradePost = async (userId: string, percentData: number, tickerSymbol: string, title: string, description: string): Promise<Redirect> => {
    const payload = {
        percent_data: percentData,
        ticker_symbol: tickerSymbol,
        title: title,
        description: description
    }
  
    const response: AxiosResponse<Redirect> = await axios.post<Redirect>(
        `http://${API_LINK}/posts/create-trade-post/${userId}`,
        payload
    );
  return response.data;
};

export const createPortfolioPost = async (userId: string, percentData: number, summaryType: string): Promise<Redirect> => {
    const payload = {
        percent_data: percentData,
        summary_type: summaryType
    }

    const response: AxiosResponse<Redirect> = await axios.post<Redirect>(
        `http://${API_LINK}/posts/create-portfolio-post/${userId}`,
        payload
    );
    return response.data;
};

export const createTextPost = async (userId: string, title: string, description: string): Promise<Redirect> => {
    const payload = {
        title: title,
        description: description
    }

    const response: AxiosResponse<Redirect> = await axios.post<Redirect>(
        `http://${API_LINK}/posts/create-text-post/${userId}`,
        payload
    );
    return response.data;
}