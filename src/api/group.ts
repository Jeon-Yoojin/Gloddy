import client from './client';
import { GetGroupsResult, GetGroupDetailResult,  CreateGroupResult } from './types';

export async function getGroups(params : GetGroupParams) {
    const response = await client.get<GetGroupsResult>(
        '/api/v1/groups',
        {
            params: params
        }
    )
    return response.data;
}

export async function applyGroup(params : ApplyGroupParams){
    const response = await client.post<string>(
        `/api/v1/groups/${params.groupId}/apply`,
        {
            params: params.request
        }
    )
    return response.data;
}

export async function getGroupDetail(params: number){
    const response = await client.get<GetGroupDetailResult>(
        `api/v1/groups/${params}`,
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
interface ApplyGroupParams{
    groupId: number;
    request: {
        "introduce": string,
        "reason": string
    };
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