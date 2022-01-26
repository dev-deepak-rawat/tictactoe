import { View, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useGameSize, useHistory, useWinningPattern } from '../hooks';

export default function Menus({ navigation}) {
  const { history, setHistory } = useHistory();
  const { setWinningPattern } = useWinningPattern();
  const { setGameSize } = useGameSize();
  
  const reset = () => {
    console.log({history, setWinningPattern})
    setHistory([]);
    setWinningPattern('');
  }

  const undo = () => {
    setHistory(history.slice(0,-1));
    setWinningPattern('');
  }

  const resetAll = () => {
    setGameSize(null);
    navigation.navigate('Home');
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
        <Button onPress={resetAll} title="Reset All" />
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


