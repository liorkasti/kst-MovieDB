import React, {FC} from 'react';
import {Text} from 'react-native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {COLORS} from '../constants/theme';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigation: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: COLORS.inputBkg,
        tabBarInactiveTintColor: COLORS.inputBorder,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.movieDark,
          height: 87,
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home'.toUpperCase(),
          tabBarIcon: ({color}) => <Text style={{color}}>Home</Text>,
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Text style={{color}}>Profile</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
