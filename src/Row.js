import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import React from 'react';
import { checkForWin, getNSizeArray, isGameDraw } from './helper';

export default function Row(props) {
    const { size, row, setHistory, history, setWinningPattern, winningPattern } = props;
  
    const _onPressButton = (col) => {
      if(history.find(({r,c}) => (r === row && c === col)))
        return;
      const updatedHistory = [...history, {r: row, c: col}];
      setHistory(updatedHistory);
      const winningPattern = checkForWin(updatedHistory, size);
      if(winningPattern)
        setWinningPattern(winningPattern);
    }
  
    const getInputSign = (col) => {
      const currHistoryItemIndex = history.findIndex( ({r, c}) => (r === row && c === col) );
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
                    onPress={() => _onPressButton(col)}
                    key={col}
                    disabled={winningPattern || isGameDraw(history, size)}
                  >
                    <Text style={styles.text}>
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
