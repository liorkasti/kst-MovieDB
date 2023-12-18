import React, {FC} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Movie, MovieListProps} from '../../../shared/types';
import {api} from '../axiosInstance/constants';
import {useFavorites} from '../hooks/useFavorites';
import {isFavorite} from '../hooks/useIsFavorites';

const MovieList: FC<MovieListProps> = ({isLoading, movies}) => {
  const {addFavorite, removeFavorite} = useFavorites();

  const handleToggleFavorite = (movie: Movie) => {
    if (isFavorite(movie.id)) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={movies}
      style={styles.container}
      keyExtractor={item => '' + item.id}
      renderItem={({item}) => (
        <View style={styles.movieContainer}>
          <Image
            style={styles.posterImage}
            source={{
              uri: `${api.posterUrlBase}${item.poster_path}`,
            }}
          />
          <View style={styles.movieDetailsContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.rating}>Rating: {item.vote_average}</Text>
            <Text style={styles.overview} numberOfLines={5}>
              {item.overview}
            </Text>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => handleToggleFavorite(item)}>
              <Text>
                {isFavorite(item.id)
                  ? 'Remove from Favorites'
                  : 'Add to Favorites'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  posterImage: {
    width: 100,
    borderRadius: 8,
  },
  movieDetailsContainer: {
    marginLeft: 8,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    marginBottom: 4,
  },
  overview: {
    maxHeight: 100,
  },
  favoriteButton: {
    marginTop: 10,
  },
});

export default MovieList;
