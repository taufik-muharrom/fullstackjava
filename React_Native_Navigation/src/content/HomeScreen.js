import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {Header} from 'react-native-elements';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      {/* <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{
          text: 'HOME',
          color: '#fff',
        }}
        containerStyle={{
          backgroundColor: '#009387',
        }}
      /> */}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Home Screen</Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <Text>Go To Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
        <Text>Go To Details</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
        <Text>Go To Setting</Text>
      </TouchableOpacity> */}
        {/* <Button title="Click Me!"></Button> */}
      </View>
    </View>
  );
}

export default HomeScreen;
