/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SizeInput from './SizeInput';
import Tictactoe from './Tictactoe';

const Stack = createNativeStackNavigator();

const App  = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SizeInput} />
        <Stack.Screen name="Game" component={Tictactoe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
