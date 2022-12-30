import client from "./client";

export async function uploadFileList(body:Array<file>) {
    const response = await client.post<uploadResult>(
        '/files',
        body,
        {
            headers:{'content-type': 'multipart/form-data'},
        },
    );
    
    return response.data;
}

interface file{
    uri: string,
    type: string,
    name: string
};

interface uploadResult{
    fileUrlList: Array<string>
};