import {useQuery, useQueryClient} from 'react-query';
import {getFavorites} from '../state';
import {Movie, ToggleFavoritesProps} from '../../../shared/types';

export const useFavorites = (): ToggleFavoritesProps => {
  const queryClient = useQueryClient();

  const {data: favorites = []} = useQuery('favorites', getFavorites);

  const addFavorite = (movieId: number) => {
    queryClient.setQueryData('favorites', [...favorites, movieId]);
  };

  const removeFavorite = (movieId: number) => {
    queryClient.setQueryData(
      'favorites',
      favorites.filter(id => id !== movieId),
    );
  };

  return {data: favorites as Movie[], addFavorite, removeFavorite};
};
