// Import necessary modules
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {useMovies} from '../hooks/useMovies';
import {useFavorites} from '../hooks/useFavorites';

// Define the TMDb API base URL and API key
const baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '?api_key=dac8bdc28c28affc1d1a4ac567abe4a0';

// Define the Movie type
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

interface MovieListProps {
  category: {name: string; endpoint: string};
}

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
