import * as React from 'react';
import {Button, TouchableOpacity, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import FlatListScreen from '../crud/FlatListScreen';
import DetailsScreen from './DetailScreen';
import SettingScreen from './SettingScreen';
import IconIos from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function HomeScreenTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarColor: 'black',
          tabBarIcon: ({tintColor}) => (
            <IconIos name="md-home-outline" color={tintColor} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={FlatListScreen}
        options={{
          tabBarLabel: 'CONTACT',
          tabBarColor: 'black',
          tabBarIcon: ({tintColor}) => (
            <IconIos name="ios-person-outline" color={tintColor} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'NEWS',
          tabBarColor: 'black',
          tabBarIcon: ({tintColor}) => (
            <IconIos name="newspaper-outline" color={tintColor} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'SETTING',
          tabBarColor: 'black',
          tabBarIcon: ({tintColor}) => (
            <IconIos name="settings-outline" color={tintColor} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

// const LogOut = (navigation) => {
//   <View> </View>;
// };
const LogOut = () => {
  const navigation = useNavigation();
  return <>{navigation.navigate('SplashScreen')}</>;
};

export default function ContentRoot() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreenTab} />
      <Drawer.Screen name="Log Out" component={LogOut} />
    </Drawer.Navigator>
  );
}
