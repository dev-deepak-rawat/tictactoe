import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { useHistory, useWinningPattern } from '../hooks';

export default function History() {
    const { history, setHistory } = useHistory();
    const { setWinningPattern } = useWinningPattern();

    const undoMove = historyIndex => {
        setHistory(history.slice(0, historyIndex));
        setWinningPattern('');
    }
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title} >History</Text>
        {history.map(({rowIndex, colIndex}, index) => (
          <HistoryView 
            key={`${rowIndex}${colIndex}`}
            {...{rowIndex, colIndex, index, undoMove }}
          />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  title: {
    fontSize: 24,
  },
  item: {
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
  },
  text: {
      fontWeight: '500',
      color: '#333',
      marginRight: 20
  }
});

const HistoryView = ({rowIndex, colIndex, index, undoMove}) => (
  <View style={styles.item}>
      <Text style={styles.text}>
          {`Player ${index % 2 === 0 ? 1 : 2}'s move {${rowIndex},${colIndex}}`}
      </Text>
      <Button onPress={() => undoMove(index)} title="Undo" />
  </View>
)

