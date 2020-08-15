/**
 * @format
 */
import './src/utils/config'
import {AppRegistry} from 'react-native';
import App from './src/routers/App';
// import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
