import { ApiResponse } from '@/api/types/base';

export interface GetRegisterCodeRequest {
  email: string;
}

export interface GetRegisterCodeResponse extends ApiResponse {
  result: boolean;
}
