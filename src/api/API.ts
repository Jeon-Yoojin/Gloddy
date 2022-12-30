import axios from 'axios';
import Config from 'react-native-config';
import { SearchLocationResult } from './types';

export async function searchLocation(params: string) {
    const response = await axios.get<SearchLocationResult>(
        'https://dapi.kakao.com/v2/local/search/keyword.json',
        {
            headers: {
                'Authorization' : Config.KAKAO_REST_API_KEY
            },
            params: {
                query: params,
            }
        }
    )
    return response.data;
}