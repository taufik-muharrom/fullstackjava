import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import RootStackScreen from './login/RootStackScreen';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default Main;
