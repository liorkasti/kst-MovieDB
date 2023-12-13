import {useQuery, useQueryClient} from 'react-query';
import {getFavorites, queryClient} from '../state';
import {Movie} from '../../shared/types';

export const useFavorites = () => {
  const fallback: Movie[] | undefined = [];
  const {data: favorites = fallback} = useQuery('favorites', getFavorites);

  const addFavorite = (movieId: number) => {
    queryClient.setQueryData('favorites', [...favorites, movieId]);
  };

  const removeFavorite = (movieId: number) => {
    queryClient.setQueryData(
      'favorites',
      favorites.filter(id => id !== movieId),
    );
  };

  return {data: favorites, addFavorite, removeFavorite};
};
