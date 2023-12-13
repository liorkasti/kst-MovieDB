import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {useFavorites} from '../hooks/useFavorites';
import {COLORS} from '../constants/theme';
import {getFavorites} from '../state';

const ProfileScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>My Favorites</Text>
      <Text>{`Total Favorites: ${getFavorites().length}`}</Text>
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
