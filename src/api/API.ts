import axios from 'axios';
import Config from 'react-native-config';
import { SearchLocationResult } from './types';

export async function searchLocation(params: string) {
    const response = await axios.get<SearchLocationResult>(
        'https://openapi.naver.com/v1/search/local.json',
        {
            headers: {
                'X-Naver-Client-Id' : Config.X_Naver_Client_ID,
                'X-Naver-Client-Secret': Config.X_Naver_Client_Secret
            },
            params: {
                query: params,
                display: 10,
            }
        }
    )
    return response.data;
}