import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { isGameDraw } from './helper';

const TitleView = ({title}) => (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function Title({ winningPattern, history, size }) {
    if(winningPattern)
        return <TitleView title={`Player ${history.length % 2 === 0 ? 2 : 1} Won`} />
    if(isGameDraw(history, size))
        return <TitleView title={'Match Draw'}/>
    return <TitleView title={`Player ${history.length % 2 === 0 ? 1 : 2}'s turn`} />
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
