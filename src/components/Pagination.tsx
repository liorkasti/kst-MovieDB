import React, {FC, useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../constants/theme';
import {page} from '../screens/HomeScreen';

interface PaginationProps {}

const Pagination: FC<PaginationProps> = ({}) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={disabled ? 1 : 0.4}
        onPress={() => {
          page.value <= 1 ? null : page.value--;
          setDisabled(true);
        }}>
        <Icon name="chevrons-left" style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.pagesIndication}>{`${page.value * 20 - 19}-${
        page.value * 20
      }`}</Text>

      <TouchableOpacity
        onPress={() => {
          page.value++;
          setDisabled(false);
        }}>
        <Icon name="chevrons-right" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    height: 16,
  },
  pagesIndication: {
    width: 'auto',
    height: 20,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '300',
    color: COLORS.movieLight,
  },
  icon: {
    color: COLORS.movieLight,
  },
});

export default Pagination;
