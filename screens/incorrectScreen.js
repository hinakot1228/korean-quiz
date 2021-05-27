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
        ×
      </Text>

      <Text style={styles.instructions}>
        ヒント
      </Text>
      <Text style={styles.instructions}>
        ヒント文
      </Text>

      <TouchableOpacity
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>もう一度解く</Text>
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