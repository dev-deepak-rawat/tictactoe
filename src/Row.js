import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import React from 'react';
import { checkForWin, getNSizeArray, isGameDraw } from './helper';

export default function Row(props) {
    const { size, row, setHistory, history, setWinningPattern, winningPattern } = props;
  
    const handleButtonPress = (col) => {
      if(history.find(({rowIndex,colIndex}) => (rowIndex === row && colIndex === col)))
        return;
      const updatedHistory = [...history, {rowIndex: row, colIndex: col}];
      setHistory(updatedHistory);
      const winningPattern = checkForWin(updatedHistory, size);
      if(winningPattern)
        setWinningPattern(winningPattern);
    }
  
    const getInputSign = (col) => {
      const currHistoryItemIndex = history.findIndex( 
        ({rowIndex, colIndex}) => (rowIndex === row && colIndex === col)
      );
      if (currHistoryItemIndex < 0) return ' ';
      return currHistoryItemIndex % 2 === 0 ? 'O' : 'X';
    }
  
    const isItemInTheWinningPattern = ({winningPattern, col}) => {
      if(! winningPattern) return false;
      if(winningPattern.includes('row')) {
        const winningRow = winningPattern[3];
        return winningRow == row;
      }
  
      if(winningPattern.includes('col')) {
        const winningCol = winningPattern[3];
        return winningCol == col;
      }
  
      if(winningPattern === 'diag1')
        return col == row;
  
        if(winningPattern === 'diag2')
        return col + row == size - 1;
    }
  
  
    return (
        <View style={styles.row}>
            {
                getNSizeArray(size).map(col => (
                  
                    <View 
                        key={col}
                        style={[
                            styles.colItem,
                            { backgroundColor: winningPattern && isItemInTheWinningPattern({winningPattern, col}) ? 'gold' : 'white'}
                        ]}
                    >
                    <TouchableHighlight 
                    onPress={() => handleButtonPress(col)}
                    key={col}
                    disabled={winningPattern || isGameDraw(history, size)}
                  >
                    <Text style={styles.text} testID={`cell${row}${col}`}>
                        {getInputSign(col)}
                    </Text>
                  </TouchableHighlight>
                    
                    </View>
                ))
            }
        </View>
    )
  }

  const styles = StyleSheet.create({
    colItem: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
    },
    highlightColItem: {
      backgroundColor: 'gold'
    },
    text: {
        height: 50,
        textAlign: 'center',
        fontSize: 30,
        paddingVertical: 5
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  });
