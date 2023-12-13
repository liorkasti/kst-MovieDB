import {Movie} from '../../shared/types';
import {axiosInstance} from '../axiosInstance';
import {api} from '../axiosInstance/constants';

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
