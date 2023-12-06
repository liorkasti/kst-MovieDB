import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {useFavorites} from '../hooks/useFavorites';

const ProfileScreen: FC = () => {
  const {getFavorites} = useFavorites();
  console.log(`Total Favorites: ${getFavorites().length}`);
  return (
    <View style={{alignItems: 'center', margin: 16}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>My Favorites</Text>
      <Text>{`Total Favorites: ${getFavorites().length}`}</Text>
    </View>
  );
};

export default ProfileScreen;
