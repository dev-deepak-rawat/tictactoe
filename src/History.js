import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';

export default function History(props) {
    const { history, setHistory, setWinningPattern } = props;
    const undoMove = historyIndex => {
        setHistory(history.slice(0, historyIndex));
        setWinningPattern('');
    }
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title} >History</Text>
      {history.map((historyItem, index) => (
        <View key={JSON.stringify(historyItem)} style={styles.item}>
            <Text style={styles.text}>
                {`Player ${index % 2 === 0 ? 1 : 2}'s move {${historyItem.rowIndex},${historyItem.colIndex}}`}
            </Text>
            <Button onPress={() => undoMove(index)} title="Undo" />
        </View>
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

