/**
 * @format
 */

import './wydr';
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './src/components/App';
import {name as appName} from './app.json';
import configureStore from './src/store';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
