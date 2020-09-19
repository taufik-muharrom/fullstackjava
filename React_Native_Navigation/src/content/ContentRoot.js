import * as React from 'react';
import {Button, TouchableOpacity, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfilScreen';
import DetailsScreen from './DetailScreen';
import SettingScreen from './SettingScreen';
import SplashScreen from '../login/SplashScreen';
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
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'PROFILE',
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
          tabBarLabel: 'DETAILS',
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

export default function ContentRoot() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreenTab} />
      <Drawer.Screen name="Log Out" component={SplashScreen} />
    </Drawer.Navigator>
  );
}
