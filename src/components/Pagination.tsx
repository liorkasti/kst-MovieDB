import React, {FC, useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../constants/theme';
import {PaginationProps} from '../../shared/types';

const Pagination: FC<PaginationProps> = ({currentPage, onPress}) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={disabled ? 1 : 0.4}
        onPress={() => {
          setDisabled(false);
          onPress(previousValue => previousValue - 1);
        }}>
        <Icon name="chevrons-left" style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.pagesIndication}>{`${currentPage * 20 - 19}-${
        currentPage * 20
      }`}</Text>

      <TouchableOpacity
        onPress={() => {
          onPress(previousValue => previousValue + 1);
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
