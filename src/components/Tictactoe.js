import React from 'react';
import { View, StyleSheet } from 'react-native';
import { getNSizeArray } from './helper';
import Row from './Row';
import History from './History';
import Title from './Title';
import Menus from './Menus';
import { useGameSize } from '../hooks';

export default function Tictactoe({ navigation }) {
  const { gameSize } = useGameSize();
  return (
    <View style={styles.container}>
    <Title />
    {
      getNSizeArray(gameSize).map(row => (
        <Row 
          key={row}
          row={row}
        />
      ))
    }
    <Menus navigation={navigation}/>
    <History />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
