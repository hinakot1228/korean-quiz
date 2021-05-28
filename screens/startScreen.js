import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class startScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>ドラマの名言で覚える</Text>
        	<Text>韓国語</Text>
          <Button
            title="始める"
						style={{ backgroundColor: 'black', fontSize: 20, color: '#fff' }}
            onPress={() => {
              this.props.navigation.navigate('UnitSelection')
            }}
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
