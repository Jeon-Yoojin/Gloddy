import GroupInfoInput from "../ui/group/create/components/GroupInfoInput";

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

export interface VerifyResult{
    verify: boolean;
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

export interface GroupInfo{
    content: string;
    meetDate: string;
    memberCount: number;
    place: string;
    title: string;
}

export interface GetGroupsResult{
    contents: Array<GroupInfo>;
    currentCount: number;
    currentPage: number;
    totalCount: number;
    totalPage: number;
}