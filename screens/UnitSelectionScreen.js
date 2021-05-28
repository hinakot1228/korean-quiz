import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

export default class UnitSelectionScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Button
            title="←"
			style={{ fontSize: 20, color: 'black' }}
            onPress={() => {
              this.props.navigation.navigate('Page1Detail')
            }}
          />
          <Text>ドラマの名言で覚える韓国語</Text>

          <Text style={styles.instructions}>
            どの年のドラマにしますか？
          </Text>

          <Button
            title="2020年"
			style={{ fontSize: 20, color: 'black' }}
          />
        </View>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
