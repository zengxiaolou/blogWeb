import { ApiResponse } from '@/api/types/base';

export interface GetRegisterCodeRequest {
  email: string;
}

export interface GetRegisterCodeResponse extends ApiResponse {
  result: boolean;
}

export interface CreateUserRequest {
  email: string;
  username: string;
  password: string;
  code: string;
}

export interface CreateUserResponse extends ApiResponse {
  result: boolean;
}
