import {
  CreateUserRequest,
  CreateUserResponse,
  GetRegisterCodeRequest,
  GetRegisterCodeResponse,
} from '@/api/types/users';
import { UseApiOptions, useRequest } from '@/api/useRequest';

const baseURL = 'http://localhost:9090/api/auth';

export const useGetRegisterCode = (data?: GetRegisterCodeRequest, options?: UseApiOptions) => {
  return useRequest<GetRegisterCodeResponse>(
    {
      url: '/register/code',
      method: 'POST',
      data,
      baseURL,
    },
    options
  );
};

export const useCreateUser = (data?: CreateUserRequest, options?: UseApiOptions) => {
  return useRequest<CreateUserResponse>(
    {
      url: '/register',
      method: 'POST',
      data,
      baseURL,
    },
    options
  );
};
