// queries/movies.ts
import {useQuery} from 'react-query';

const fetchMovies = async (endpoint: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?api_key=dac8bdc28c28affc1d1a4ac567abe4a0`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};

export const useMovies = (endpoint: string) => {
  return useQuery(['movies', endpoint], () => fetchMovies(endpoint));
};
