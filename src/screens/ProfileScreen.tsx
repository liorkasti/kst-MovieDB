import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {useFavorites} from '../hooks/useFavorites';
import {COLORS} from '../constants/theme';

const ProfileScreen: FC = () => {
  const {data: favorites} = useFavorites();

  console.log(`Total Favorites: ${favorites.length}`);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>My Favorites</Text>
      <Text>{`Total Favorites: ${favorites.length}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bkg,
  },
});

export default ProfileScreen;
