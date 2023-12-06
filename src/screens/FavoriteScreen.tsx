// FavoriteScreen.tsx
import React from 'react';
import {View, Text} from 'react-native';
import {useFavorites} from '../hooks/useFavorites';

const FavoriteScreen: React.FC = () => {
  const {getFavorites} = useFavorites();

  return (
    <View style={{alignItems: 'center', margin: 16}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>My Favorites</Text>
      <Text>{`Total Favorites: ${getFavorites().length}`}</Text>
    </View>
  );
};

export default FavoriteScreen;
