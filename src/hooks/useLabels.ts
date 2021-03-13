import { useMemo } from 'react';
import english from '../i18n/english';
const useLabels = () => {
  return useMemo(() => {
    return english;
  }, []);
};

export { useLabels };
