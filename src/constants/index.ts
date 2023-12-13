import {StatusBar} from 'react-native';

export const HIT_SLOP_10 = {top: 10, left: 10, right: 10, bottom: 10};
export const titleStr = 'Title:';
export const createStr = 'Create';
export const loginStr = 'Login';
export const signOutStr = 'Sign Out';
export const hightStatusBar = StatusBar.currentHeight || 0;
export const CATEGORIES = [
  {key: 1, value: {endpoint: 'movie/popular', name: 'Popular'}},
  {key: 2, value: {endpoint: 'movie/top_rated', name: 'Top Rated'}},
];
export const SELECTED_CATEGORIES = [
  {key: 1, value: 'Popular'},
  {key: 2, value: 'Top Rated'},
];
