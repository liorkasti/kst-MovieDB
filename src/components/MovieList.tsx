// Import necessary modules
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MovieListProps} from '../../../shared/types';
import {useFavorites} from '../hooks/useFavorites';
import {useMovies} from '../hooks/useMovies';
import {getFavorites} from '../state';
import {api} from '../axiosInstance/constants';
import Pagination from './Pagination';
import {useQueryClient} from 'react-query';
import {fetchMovies} from '../hooks/useFetchMovies';

const MovieList: React.FC<MovieListProps> = ({category}) => {
  const {addFavorite, removeFavorite} = useFavorites();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {data: movies, isLoading} = useMovies(category.endpoint, currentPage);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < movies?.total_pages) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(['movies', nextPage], () =>
        fetchMovies(category.endpoint, nextPage),
      );
    }
  }, [category.endpoint, currentPage, movies?.total_pages, queryClient]);

  const handleToggleFavorite = (movieId: number) => {
    console.log(movieId);
    if (getFavorites().includes(movieId)) {
      removeFavorite(movieId);
    } else {
      addFavorite(movieId);
    }
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{flex: 1, padding: 16}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 16}}>
        {category.name}
      </Text>
      <FlatList
        data={movies?.results}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.movieContainer}>
            <Image
              style={styles.posterImage}
              source={{
                uri: `${api.posterUrlBase}${item.poster_path}`,
              }}
            />
            <View style={{marginLeft: 8, flex: 1}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {item.title}
              </Text>
              <Text style={{marginBottom: 4}}>Rating: {item.vote_average}</Text>
              <Text style={{maxHeight: 100}}>{item.overview}</Text>
              <TouchableOpacity
                style={{marginTop: 10}}
                onPress={() => handleToggleFavorite(item.id)}>
                <Text>
                  {getFavorites().includes(item.id)
                    ? 'Remove from Favorites'
                    : 'Add to Favorites'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Pagination
        currentPage={currentPage}
        disabled={currentPage > movies?.total_pages}
        onPress={setCurrentPage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  posterImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
});

export default MovieList;
