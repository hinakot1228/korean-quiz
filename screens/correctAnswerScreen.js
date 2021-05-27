import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>←</Text>
      </TouchableOpacity>
      <Text style={styles.instructions}>
        2020年のドラマ
      </Text>

      <Text style={styles.instructions}>
        Q.1
      </Text>
      <Text style={styles.instructions}>
        〇
      </Text>

      <Text style={styles.instructions}>
        解説
      </Text>
      <Text style={styles.instructions}>
        解説文
      </Text>

      <TouchableOpacity
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>次の問題へ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});