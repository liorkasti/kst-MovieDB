import {QueryClient} from 'react-query';
import {Movie} from '../../../shared/types';

export const generateQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 600000, // 10 minutes
        cacheTime: 900000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
      mutations: {},
    },
  });
};

export const queryClient = generateQueryClient();

export const getFavorites = (): Movie[] => {
  return queryClient.getQueryData('favorites') || [];
};

// export const getFavorites = async (): Promise<Movie[]> => {
//   return (await axiosInstance.get('favorites')) || [];
// };
