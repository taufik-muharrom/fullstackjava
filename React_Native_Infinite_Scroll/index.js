import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
// import fetchHome from './src/fetchapi/home';
import App from './App';

AppRegistry.registerComponent(appName, () => App);
