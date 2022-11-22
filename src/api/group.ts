import client from './client';
import { GetGroupsResult, CreateGroupResult } from './types';
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

export async function createGroup(params: CreateGroupParams){
    const response = await client.post<CreateGroupResult>(
        '/api/v1/group-create', params
    )
    return response.data;
}

interface GetGroupParams {
    page: number;
    size: number;
    userId: number;
}

interface CreateGroupParams {
    content: string;
    endTime: string;
    fileUrl: string;
    maxUser: number;
    meetDate: string;
    place: string;
    place_latitude: string;
    place_longitude: string;
    startTime: string;
    title: string;
}