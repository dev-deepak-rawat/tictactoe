import { View, Button, StyleSheet } from 'react-native';
import React from 'react';

export default function Menus({setHistory, history, setWinningPattern}) {
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
        <Button onPress={reset} title="Reset" />
        <Button onPress={undo} title="Undo" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
  },
});


