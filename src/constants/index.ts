import {Dimensions, StatusBar} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

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

export const ZEPLIN_DEFAULT_WIDTH = 375;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const TOP_INSET = initialWindowMetrics?.insets.top ?? 0;
