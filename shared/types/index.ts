export interface MovieListProps {
  category: {name: string; endpoint: string};
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}
