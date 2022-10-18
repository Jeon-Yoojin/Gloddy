import client from './client';
import {AuthResult, DupResult, User} from './types';

export async function accountDupCheck(params: DupCheckParams) {
    const response = await client.post<DupResult>(
        '/api/v1/auth/email/check',
        params,
    )
    return response.data;
}

export async function register(params: RegisterParams) {
    const response = await client.post<AuthResult>(
        '/api/v1/auth/sign-up',
        params,
    );
    return response.data;
}

export async function login(params: LoginParams) {
    const response = await client.post<AuthResult>(
        'api/v1/auth/login',
        params,
    )
    return response.data;
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