import {useQuery} from 'react-query';
import {MoviesAPIProps, MoviesQuery} from '../../../shared/types';
import {fetchMovies} from './useFetchMovies';

export const useMovies = (endpoint: string, page: number): MoviesQuery => {
  const fallback: MoviesAPIProps | undefined = undefined;
  const {
    isError,
    isLoading,
    data = fallback,
    error,
    isSuccess,
  } = useQuery(['movies', endpoint, page], () => fetchMovies(endpoint, page));
  // console.log({isError, isLoading, data, error, isSuccess});
  if (isSuccess && !isError) {
    return {
      data: data as MoviesAPIProps,
      isLoading,
    };
  }
  return {
    isError,
    isLoading,
    error: error as Error,
  };
};
