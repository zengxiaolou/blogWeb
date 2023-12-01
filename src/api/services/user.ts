import { GetRegisterCodeRequest, GetRegisterCodeResponse } from '@/api/types/users';
import { UseApiOptions, useRequest } from '@/api/useRequest';

const baseURL = 'http://localhost:9090/users';

export const useGetRegisterCode = (data?: GetRegisterCodeRequest, options?: UseApiOptions) => {
  return useRequest<GetRegisterCodeResponse>(
    {
      url: '/register-code',
      method: 'POST',
      data,
      baseURL,
    },
    options
  );
};
