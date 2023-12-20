import {useQuery, useQueryClient} from 'react-query';
import {getFavorites} from '../state';
import {Movie, ToggleFavoritesProps} from '../../../shared/types';

export const useFavorites = (): ToggleFavoritesProps => {
  const queryClient = useQueryClient();

  const fallback: Movie[] = [];
  const {
    isError,
    isLoading,
    data = fallback,
    isSuccess,
  } = useQuery<Movie[]>('favorites', getFavorites);

  const addFavorite = (movie: Movie) => {
    queryClient.setQueryData(
      ['favorites'],
      [...data, {...movie, is_liked: true}],
    );
  };

  const removeFavorite = (movie: Movie) => {
    queryClient.setQueryData('favorites', () =>
      data.filter(m => m.id !== movie.id),
    );
  };

  // return {data: favorites as Movie[], addFavorite, removeFavorite};

  if (isSuccess && !isError) {
    return {
      data,
      addFavorite,
      removeFavorite,
      isLoading,
    };
  }
  return {
    data,
    addFavorite,
    removeFavorite,
    isLoading,
  };
};
