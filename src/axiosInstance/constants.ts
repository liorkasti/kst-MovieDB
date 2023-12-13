export const baseUrl = 'https://api.themoviedb.org/3/';
export const apiKey = '?api_key=dac8bdc28c28affc1d1a4ac567abe4a0';
export const baseImageUrl = `${baseUrl}/images`;

export const api = {
  baseURL: 'https://api.themoviedb.org/3/',
  Authorization: '?api_key=dac8bdc28c28affc1d1a4ac567abe4a0',
  posterUrlBase: 'https://image.tmdb.org/t/p/w500',
  popular: 'movie/popular',
  search: 'search/movie',
  language: '&language=en-US',
  pageIndex: '&page=',
};

export const categories = [
  {name: 'Popular', endpoint: 'movie/popular'},
  {name: 'Top Rated', endpoint: 'movie/top_rated'},
];
