import React, {useState} from 'react';
import {StyleSheet, View, useColorScheme} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import {CATEGORIES, SELECTED_CATEGORIES} from '../constants';

const HomeScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selected, setSelected] = useState<number>(SELECTED_CATEGORIES[0].key);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? 'black' : 'white'},
      ]}>
      <SelectList
        setSelected={(val: React.SetStateAction<number>) => setSelected(val)}
        data={SELECTED_CATEGORIES}
        save="key"
        placeholder={'Choose Category'}
      />
      <MovieList category={CATEGORIES[selected - 1].value} page={currentPage} />
      <Pagination currentPage={currentPage} onPress={setCurrentPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default HomeScreen;
