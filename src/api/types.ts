export interface User{
    email: string;
    name: string;
    school: string;
    birth: string;
    gender: string;
    personalities: Array<string>;
}

export interface DupResult{
    errorCode: string;
    aboolean: boolean;
}

export interface RegisterResult{
    errorCode: string,
    userId: number,
    authority: string
}

export interface LoginResult{
    token: string;
    user: User;
}
