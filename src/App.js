/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Button, SafeAreaView, StatusBar, TextInput, View, StyleSheet } from 'react-native';
import Tictactoe from './Tictactoe';

const App  = () => {
  const [text, setText] = useState('');
  const [size, setSize] = useState(null);
  const handlePress = () => {
    setText('');
    setSize(+text ? +text : 3);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      {
        size ? <Tictactoe size={size} setSize={setSize}/> : (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              placeholder="Enter Game Size"
            />
            <Button onPress={handlePress} title="Enter" />
          </View>
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
  },
  input: {
    fontSize: 20
  }
});
