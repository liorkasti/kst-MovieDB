// Import necessary modules
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

// Define the TMDb API base URL and API key
const baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '?api_key=dac8bdc28c28affc1d1a4ac567abe4a0';

// Define the categories and their corresponding API endpoints
const categories = [
  {name: 'Popular', endpoint: 'movie/popular'},
  {name: 'Top Rated', endpoint: 'movie/top_rated'},
];

// Define the Movie type
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

// Define the component props
interface MovieListProps {
  category: {name: string; endpoint: string};
}

// Define the component
const MovieList: React.FC<MovieListProps> = ({category}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch movies when the component mounts
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${baseURL}${category.endpoint}${apiKey}`,
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category]);

  if (loading) {
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
        data={movies}
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
              <Text>{item.overview}</Text>
            </View>
          </View>
        )}
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
