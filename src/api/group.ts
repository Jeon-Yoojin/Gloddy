import client from './client';
import { GetGroupsResult } from './types';
import useToken from '../redux/hooks/useToken';

export async function getGroups(params : GetGroupParams) {
    const response = await client.get<GetGroupsResult>(
        '/api/v1/groups',
        {
            params: params
        }
    )
    return response.data;
}

interface GetGroupParams {
    page: number;
    size: number;
    userId: number;
}