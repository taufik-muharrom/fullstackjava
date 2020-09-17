import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './login/RootStackScreen';

const Main = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Main;
