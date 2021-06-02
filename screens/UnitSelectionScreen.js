import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements';

export default class UnitSelectionScreen extends Component {
    render() {
      return (
        <>
          <Header
            leftComponent={{ icon: 'chevron-left', color: '#fff' }}
            centerComponent={{ text: 'ドラマの名言で覚える韓国語', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <Button 
            title="梨泰院クラス"
            onPress={() => {
              this.props.navigation.navigate('Question')
            }}
           />
        </>
      );
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
