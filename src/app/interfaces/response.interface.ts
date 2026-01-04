import { HttpErrorResponse } from "@angular/common/http";

export interface IHttpResponse<T> {
    message: string;
    error: string;
    statusCode: number;
    data: T
}

export interface IHttpResponseError<T> extends HttpErrorResponse {
    error: IHttpResponse<T>;
}

export interface AuthResponse {

    access_token: string;
    first_login: boolean | null;
    user: UserInfo

}


export interface UserInfo {
    id: number;
    user_name: string;
}
