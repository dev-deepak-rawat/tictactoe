import { View, Button, StyleSheet } from 'react-native';
import React from 'react';

export default function Menus({setHistory, history, setWinningPattern, setSize}) {
  const reset = () => {
    setHistory([]);
    setWinningPattern('');
  }
  const undo = () => {
    setHistory(history.slice(0,-1));
    setWinningPattern('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button onPress={reset} title="Reset" />
      </View>
      <View style={styles.button}>
        <Button onPress={undo} title="Undo" testID='undo-button'/>
      </View>
      <View style={styles.button}>
        <Button onPress={() => setSize(null)} title="Reset All" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 5
  }
});


