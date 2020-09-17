import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Details Screen</Text>
      {/* <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text>Back Home</Text>
      </TouchableOpacity> */}
    </View>
  );
}

export default DetailsScreen;
