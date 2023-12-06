// queries/favorites.ts
import {useQueryClient} from 'react-query';

export const useFavorites = () => {
  const queryClient = useQueryClient();

  const getFavorites = () => {
    return queryClient.getQueryData('favorites') || [];
  };

  const addFavorite = (movieId: number) => {
    const favorites = getFavorites();
    queryClient.setQueryData('favorites', [...favorites, movieId]);
  };

  const removeFavorite = (movieId: number) => {
    const favorites = getFavorites();
    queryClient.setQueryData(
      'favorites',
      favorites.filter(id => id !== movieId),
    );
  };

  return {getFavorites, addFavorite, removeFavorite};
};
