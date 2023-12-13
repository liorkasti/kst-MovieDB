import {Signal} from '@preact/signals';

export interface MoviesQuery {
  data?: Movie[];
  isError?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
  error?: Error;
}
export interface MovieListProps {
  category: {name: string; endpoint: string};
  page: Signal<number>;
}

export interface MovieFetchProps {
  category: {endpoint: string; page: number};
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}
