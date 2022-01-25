import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function SizeInput({setGameSizeInput, handlePress, error}) {
  return (
    <>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setGameSizeInput}
                placeholder="Enter Game Size"
            />
            <Button onPress={handlePress} title="Enter" />
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 20,
      marginBottom: 0,
    },
    input: {
      fontSize: 20
    },
    error: {
      fontWeight: '500',
      color: 'red',
      marginLeft: 20
    }
  });
