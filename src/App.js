/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import SizeInput from './SizeInput';
import Tictactoe from './Tictactoe';

const App  = () => {
  const [gameSizeInput, setGameSizeInput] = useState('');
  const [size, setSize] = useState(null);
  const [error, setError] = useState('');
  const handlePress = () => {
    if(gameSizeInput < 3 || gameSizeInput > 8 ) {
      setError('Please enter a number between 3 and 8');
      return;
    }
    setError('');
    setGameSizeInput('');
    setSize(+gameSizeInput ? +gameSizeInput : 3);
  }

  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <StatusBar barStyle="dark-content" />
      {
        size
          ? 
        <Tictactoe size={size} setSize={setSize}/>
          :
        <SizeInput
          error={error}
          setGameSizeInput={setGameSizeInput}
          handlePress={handlePress}
        />
      }
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeViewContainer: {
    flex: 1
  },
});
