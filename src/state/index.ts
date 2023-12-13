import {QueryClient} from 'react-query';
import {useQueryErrorHandler} from '../hooks/useQueryErrorHandler';

export const generateQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: useQueryErrorHandler,
        staleTime: 600000, // 10 minutes
        cacheTime: 900000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
      mutations: {
        onError: useQueryErrorHandler,
      },
    },
  });
};

export const queryClient = generateQueryClient();

export const getFavorites = () => {
  return queryClient.getQueryData('favorites') || [];
};
