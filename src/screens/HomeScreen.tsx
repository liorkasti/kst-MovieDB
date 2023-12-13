import React, {useEffect, useState} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
// import {SelectList} from 'react-native-dropdown-select-list';
// import {useDispatch, useSelector} from 'react-redux';
// import MediaCard from '../components/MediaCard';
// import {CATEGORIES} from '../constants/categories';
// import {fetchData} from '../hooks/useFetch';
// import {fetchFavorites} from '../redux/actions';
// import {RootStateType} from '../types'; // Assuming you have a RootStateType defined

interface HomeScreenProps {}

// Define the categories and their corresponding API endpoints
const categories = [
  {name: 'Popular', endpoint: 'movie/popular'},
  {name: 'Top Rated', endpoint: 'movie/top_rated'},
];

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // const [newsData, setNewsData] = useState<any[]>([]); // Replace 'any' with the correct type for your newsData
  // const [selected, setSelected] = useState<string[]>([]); // Replace 'string' with the correct type for your selected items
  const isDarkMode = useColorScheme() === 'dark';
  // const {user} = useSelector((state: RootStateType) => state.reducers);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (user) {
  //     dispatch(fetchFavorites(user));
  //   }
  // }, [user]);

  // const handleSelection = (category: string) => {
  //   fetchData(category, 'us')
  //     .then(data => {
  //       setNewsData(data.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   handleSelection(selected);
  // }, [selected]);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? 'black' : 'white'},
      ]}>
      <MovieList category={categories[0]} page={currentPage} />
      {/* <SelectList
        setSelected={val => setSelected(val)}
        data={CATEGORIES}
        save="value"
        onSelect={() => handleSelection(selected)}
        label="Category"
        defaultOption={{key: '0', value: 'Choose Category'}}
      /> */}
      {/* <MediaCard data={newsData} /> */}
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
