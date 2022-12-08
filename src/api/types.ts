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
export interface GetGroupDetailResult{
    myGroup: boolean;
    title: string;
    fileUrl: string;
    content: string;
    participantNames: Array<string>;
    meetDate: string;
    startTime: string;
    endTime: string;
    place: string;
    place_latitude: string;
    place_longitude: string;
    countParticipants: number;
}
export interface CreateGroupResult{
    groupId: number;
}
export interface CreateArticleResult{
    commentId: number;
}

export interface DeleteArticleResult{
    //commentId: number;
}

export interface UpdateArticleResult{
    content: string;
    notice: boolean;
}