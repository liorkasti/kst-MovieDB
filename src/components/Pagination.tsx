import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {PaginationProps} from '../../../shared/types';
import {COLORS} from '../constants/theme';

const Pagination: FC<PaginationProps> = ({currentPage, disabled, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={currentPage > 1 ? 1 : 0.4}
        onPress={() => {
          currentPage > 1 && onPress(currentPage - 1);
        }}>
        <Icon name="chevrons-left" style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.pagesIndication}>{`${currentPage * 20 - 19}-${
        currentPage * 20
      }`}</Text>

      <TouchableOpacity
        activeOpacity={currentPage > 1 ? 1 : 0.4}
        onPressIn={() => !disabled && onPress(currentPage + 1)}>
        <Icon name="chevrons-right" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  pagesIndication: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.movieLight,
  },
  icon: {
    fontSize: 14,
    fontWeight: '300',
    color: COLORS.movieLight,
  },
});

export default Pagination;
