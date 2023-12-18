import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {useFavorites} from '../hooks/useFavorites';
import {COLORS} from '../constants/theme';
import MovieList from '../components/MovieList';
import {TOP_INSET} from '../constants';

const ProfileScreen: FC = () => {
  const {data: favorites, isLoading} = useFavorites();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites</Text>
      <Text>{`Total Favorites: ${favorites.length}`}</Text>
      <MovieList isLoading={isLoading} movies={favorites} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: COLORS.bkg,
    paddingTop: TOP_INSET,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
