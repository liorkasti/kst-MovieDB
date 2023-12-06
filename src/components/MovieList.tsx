// Import necessary modules
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MovieListProps} from '../../shared/types';
import {useFavorites} from '../hooks/useFavorites';
import {useMovies} from '../hooks/useMovies';

const MovieList: React.FC<MovieListProps> = ({category}) => {
  const {data: movies, isLoading} = useMovies(category.endpoint);
  const {getFavorites, addFavorite, removeFavorite} = useFavorites();

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
        data={movies.results}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.movieContainer}>
            <Image
              style={styles.posterImage}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
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
    </View>
  );

  function handleToggleFavorite(movieId: number) {
    console.log(movieId);
    if (getFavorites().includes(movieId)) {
      removeFavorite(movieId);
    } else {
      addFavorite(movieId);
    }
  }
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
