import {useQuery} from 'react-query';
import {axiosInstance} from '../axiosInstance';
import {api} from '../axiosInstance/constants';
import {Movie, MoviesQuery} from '../../shared/types';
import {Signal} from '@preact/signals';

export const fetchMovies = async (
  endpoint: string,
  page: number,
): Promise<Movie[]> => {
  try {
    const {data} = await axiosInstance.get(
      `${endpoint}${api.Authorization}${api.pageIndex}${page}`,
    );
    return data;
  } catch (err) {
    console.warn('Failed to fetch movies', err);
  }
  return [];
};

export const useMovies = (endpoint: string, page: number): MoviesQuery => {
  const fallback: Movie[] | undefined = [];
  const {
    isError,
    isLoading,
    data = fallback,
    error,
    isSuccess,
  } = useQuery(['movies', endpoint], () => fetchMovies(endpoint, page));
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
