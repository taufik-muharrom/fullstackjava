import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './src/login/RootStackScreen';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
