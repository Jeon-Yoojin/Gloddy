export interface User{
    /*
    email: string;
    name: string;
    school: string;
    birth: string;
    gender: string;
    personalities: Array<string>;
    */
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface AuthResult{
    jwt: string;
    user: User;
}