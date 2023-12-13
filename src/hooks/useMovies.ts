import {useQuery} from 'react-query';
import {Movie, MoviesQuery} from '../../shared/types';
import {fetchMovies} from './useFetchMovies';

export const useMovies = (endpoint: string, page: number): MoviesQuery => {
  const fallback: Movie[] | undefined = [];
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
      data: data as Movie[],
      isLoading,
    };
  }
  return {
    isError,
    isLoading,
    error: error as Error,
  };
};
