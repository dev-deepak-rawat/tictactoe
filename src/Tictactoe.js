import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { getNSizeArray } from './helper';
import Row from './Row';
import History from './History';
import Title from './Title';
import Menus from './Menus';

export default function Tictactoe({size, setSize}) {
  const [ history, setHistory] = useState([]);
  const [ winningPattern, setWinningPattern ] = useState('');
  return (
    <View style={styles.container}>
    <Title {...{history, size, winningPattern}} />
    {
      getNSizeArray(size).map(row => (
        <Row 
          key={row} 
          {...{size, row, setHistory, history, winningPattern, setWinningPattern}}
        />
      ))
    }
    <Menus {...{setHistory, history, setWinningPattern, setSize}} />
    <History {...{setHistory, history, setWinningPattern}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
  }
});
