import {Movie} from '../../../shared/types';
import {getFavorites} from '../state';

export const isFavorite = (id: number): boolean => {
  const favorites: Movie[] = getFavorites();
  return favorites.some((movie: Movie) => movie.id === id);
};
