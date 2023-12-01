import { useState, useCallback } from 'react';

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const close = useCallback(() => setValue(false), []);
  const open = useCallback(() => setValue(true), []);

  return [value, open, close] as const;
};
