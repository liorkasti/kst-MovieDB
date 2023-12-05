import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {loginStr} from '../constants';
import {COLORS} from '../constants/theme';

const WelcomeScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AppNavigation' as never)}>
        <Text style={styles.buttonText}>{loginStr}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //TODO: add custom styles in theme.tsx
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bkg,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    position: 'absolute',
    backgroundColor: COLORS.thirdary,
    left: '32%',
    right: '32%',
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 50,
    bottom: 61,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
