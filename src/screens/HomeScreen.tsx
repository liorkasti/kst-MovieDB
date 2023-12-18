import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {useQueryClient} from 'react-query';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import {CATEGORIES, SELECTED_CATEGORIES, TOP_INSET} from '../constants';
import {useFavorites} from '../hooks/useFavorites';
import {fetchMovies} from '../hooks/useFetchMovies';
import {useMovies} from '../hooks/useMovies';
import {getFavorites} from '../state';

const HomeScreen: React.FC = () => {
  const [selected, setSelected] = useState<number>(SELECTED_CATEGORIES[0].key);
  const isDarkMode = useColorScheme() === 'dark';
  const [currentPage, setCurrentPage] = useState<number>(1);

  const category = CATEGORIES[selected - 1].value;

  const {addFavorite, removeFavorite} = useFavorites();
  const {data, isLoading} = useMovies(category.endpoint, currentPage);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (data && currentPage < data.total_pages) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(['movies', nextPage], () =>
        fetchMovies(category.endpoint, nextPage),
      );
    }
  }, [category.endpoint, currentPage, data, queryClient]);

  const handleToggleFavorite = (movieId: number) => {
    console.log(movieId);
    if (getFavorites().includes(movieId)) {
      removeFavorite(movieId);
    } else {
      addFavorite(movieId);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? 'black' : 'white'},
      ]}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 16}}>
        {category.name}
      </Text>

      <SelectList
        setSelected={(val: React.SetStateAction<number>) => {
          setSelected(val);
          setCurrentPage(1);
        }}
        data={SELECTED_CATEGORIES}
        save="key"
        placeholder={'Choose Category'}
      />
      <MovieList
        isLoading={isLoading}
        movies={data?.results}
        onPress={handleToggleFavorite}
      />
      <Pagination
        currentPage={currentPage}
        disabled={currentPage > data?.total_pages}
        onPress={setCurrentPage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: TOP_INSET,
    paddingHorizontal: 24,
  },
});

export default HomeScreen;
