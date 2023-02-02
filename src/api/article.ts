import client from './client';
import { GetArticleResult, CreateArticleResult, DeleteArticleResult, UpdateArticleResult } from './types';

export async function getArticles(params: GetArticleParams) {
    console.log('getArticles 호출')
    const response = await client.get<GetArticleResult>(
        `/api/v1/groups/${params.groupId}/articles`
    )
    return response.data;
}

export async function createArticle(params: CreateArticleParams) {
    const response = await client.post<CreateArticleResult>(
        `/api/v1/groups/${params.groupId}/article`, params.request
    )
    return response.data;
}

export async function deleteArticle(params: DeleteArticleParams) {
    const response = await client.delete<DeleteArticleResult>(
        `/api/v1/articles/${params.articleId}`
    )

    return response.data;
}

export async function updateArticle(params: UpdateArticleParams) {
    const response = await client.patch<UpdateArticleResult>(
        `/api/v1/articles/${params.articleId}`, params.request
    )

    return response.data;
}

interface GetArticleParams {
    groupId: number;
}

interface CreateArticleParams {
    groupId: number;
    request: {
        content: string
    }
}

interface DeleteArticleParams {
    articleId: number;
}

interface UpdateArticleParams {
    articleId: string;
    request: {
        "content": string,
        "notice": boolean
    }
}