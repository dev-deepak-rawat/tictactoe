/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Button, SafeAreaView, StatusBar, TextInput, View, StyleSheet, Text } from 'react-native';
import Tictactoe from './Tictactoe';

const App  = () => {
  const [text, setText] = useState('');
  const [size, setSize] = useState(null);
  const [error, setError] = useState('');
  const handlePress = () => {
    if(text < 3 || text > 8 ) {
      setError('Please enter a number between 3 and 8');
      return;
    }
    setError('');
    setText('');
    setSize(+text ? +text : 3);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      {
        size ? <Tictactoe size={size} setSize={setSize}/> : (
          <>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              placeholder="Enter Game Size"
            />
            <Button onPress={handlePress} title="Enter" />
          </View>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          </>
        )
      }
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    marginBottom: 0,
  },
  input: {
    fontSize: 20
  },
  error: {
    fontWeight: '500',
    color: 'red',
    marginLeft: 20
  }
});
