import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { isGameDraw, getLastPlayer, getNextPlayer } from './helper';
import { useGameSize, useHistory, useWinningPattern } from '../hooks';

const TitleView = ({title}) => (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function Title() {
    const { history } = useHistory();
    const { winningPattern } = useWinningPattern();
    const { gameSize } = useGameSize();

    if(winningPattern)
        return <TitleView title={`Player ${getLastPlayer(history)} Won`} />
    if(isGameDraw(history, gameSize))
        return <TitleView title={'Match Draw'}/>
    return <TitleView title={`Player ${getNextPlayer(history)}'s turn`} />
}

const styles = StyleSheet.create({
    titleContainer: {
        marginVertical: 10
    },
  title: {
      fontSize: 24,
      fontWeight: '500'
  }
});
