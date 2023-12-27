import { ApiResponse } from '@/api/types/base';

export interface GetRegisterCodeRequest {
  email: string;
}

export interface GetRegisterCodeResponse extends ApiResponse {
  result: boolean;
}

export interface Token {
  token: string;
}

export interface CreateUserRequest {
  email: string;
  username: string;
  password: string;
  code: string;
}

export interface CreateUserResponse extends ApiResponse {
  result: Token;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse extends ApiResponse {
  result: Token;
}
