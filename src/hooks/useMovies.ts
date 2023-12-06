import {useQuery} from 'react-query';
import {axiosInstance} from '../axiosInstance';
import {api} from '../axiosInstance/constants';

const fetchMovies = async (endpoint: string) => {
  try {
    const {data} = await axiosInstance.get(`${endpoint}${api.Authorization}`);
    return data;
  } catch (err) {
    console.warn('Failed to fetch movies', err);
  }
};

export const useMovies = (endpoint: string) => {
  return useQuery(['movies', endpoint], () => fetchMovies(endpoint));
};
