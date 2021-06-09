import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Image } from 'react-native';
import {Card, ListItem, Header, Button, Icon, Text, PricingCard, Divider} from 'react-native-elements';

export default class ScoreScreen extends Component {
  render() {
    return (
      <>
        <Header
          leftComponent={{ icon: 'chevron-left', color: '#fff' }}
          centerComponent={{ text: '2020年のドラマ', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Card>
          <Card.Title>スコア</Card.Title>
          <Card.Divider/>
          <Text style={{marginBottom: 10}}>
            {this.props.score}点
          </Text>
        </Card>
        <Button
          title="トップに戻る"
          onPress={() => {
            this.props.navigation.navigate('Start')
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
