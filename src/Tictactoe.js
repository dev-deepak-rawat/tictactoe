import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { getNSizeArray } from './helper';
import Row from './Row';
import History from './History';
import Title from './Title';
import Menus from './Menus';

export default function Tictactoe({size, setSize}) {
  const [ history, setHistory] = useState([]);
  //winning pattern can be row0, col1, diag1, diag2 etc
  const [ winningPattern, setWinningPattern ] = useState('');
  return (
    <View style={styles.container}>
    <Title 
      history={history}
      size={size}
      winningPattern={winningPattern}
    />
    {
      getNSizeArray(size).map(row => (
        <Row 
          key={row}
          size={size}
          row={row}
          setHistory={setHistory}
          history={history}
          winningPattern={winningPattern}
          setWinningPattern={setWinningPattern}
        />
      ))
    }
    <Menus
      setHistory={setHistory}
      history={history}
      setWinningPattern={setWinningPattern}
      setSize={setSize}
    />
    <History
      setHistory={setHistory}
      history={history}
      setWinningPattern={setWinningPattern}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
  }
});
