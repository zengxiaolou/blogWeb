import { useState, useEffect, useCallback } from 'react';
import useAxios, { configure } from 'axios-hooks';
import { AxiosRequestConfig } from 'axios';
import axios from './baseAxios';
export interface UseApiOptions {
  auto?: boolean;
  ready?: boolean;
  dependencies?: any[];
}
configure({ axios });
export const useRequest = <TResponse = any>(
  requestConfig: AxiosRequestConfig,
  { auto = false, ready = false, dependencies = [] }: UseApiOptions = {}
) => {
  const [trigger, setTrigger] = useState(auto);

  const [{ data, loading, error }, execute] = useAxios<TResponse>(requestConfig, { manual: true });

  const run = useCallback(
    (runOptions?: AxiosRequestConfig) => {
      execute(runOptions || requestConfig);
    },
    [execute, requestConfig]
  );

  useEffect(() => {
    if (trigger && ready) {
      run();
      setTrigger(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, ready, run, ...dependencies]);

  return { data, loading, error, run };
};
