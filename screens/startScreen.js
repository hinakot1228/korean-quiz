import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Card, ListItem, Header, Button, Icon, Text, PricingCard, Divider} from 'react-native-elements';

export default class startScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>ドラマの名言で覚える</Text>
        	<Text>韓国語</Text>
          <Button
          title="始める"
          type="outline"
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
