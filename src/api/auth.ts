import client from './client';
import {DupResult, RegisterResult, LoginResult, User} from './types';

export async function accountDupCheck(params: {email: string}) {
    const response = await client.post<DupResult>(
        '/api/v1/auth/email/check',
        {email : params},
    )
    return response;
}

export async function register(params: RegisterParams) {
    const response = await client.post<RegisterResult>(
        '/api/v1/auth/sign-up',
        params,
    );
    return response.data;
}

export async function login(params: LoginParams) {
    const response = await client.post<LoginResult>(
        'api/v1/auth/login',
        params,
    )
    return response;
}

interface DupCheckParams {
    email: string
}

interface RegisterParams {
    email: string;
    password: string;
    name: string;
    school: string;
    brith: string;
    gender: string;
    personalities: Array<string>;
}

interface LoginParams {
    email: string;
    password: string;
}