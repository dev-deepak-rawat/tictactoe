import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import constants from '../constants';
import { useGameSize } from '../hooks';

export default function SizeInput({ navigation }) {
  const [error, setError] = useState('');
  const [gameSizeInput, setGameSizeInput] = useState('');
  const { setGameSize } = useGameSize();
  const dispatch = useDispatch();
  
  const handlePress = () => {
    if(gameSizeInput < 3 || gameSizeInput > 8 ) {
      setError('Please enter a number between 3 and 8');
      return;
    }
    setError('');
    setGameSizeInput('');
    setGameSize(+gameSizeInput ? +gameSizeInput : 3);
    dispatch({type: constants.START_NEW_GAME});
    navigation.navigate('Game');
  }

  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={setGameSizeInput}
            placeholder="Enter Game Size"
            value={gameSizeInput}
        />
        <Button onPress={handlePress} title="Enter" />
        {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
        
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      fontSize: 20
    },
    error: {
      fontWeight: '500',
      color: 'red',
    }
  });
