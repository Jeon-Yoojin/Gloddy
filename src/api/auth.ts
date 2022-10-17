import client from './client';
import {AuthResult, User} from './types';

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