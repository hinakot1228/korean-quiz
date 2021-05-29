import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Image } from 'react-native';
import {Card, ListItem, Header, Button, Icon, Text, PricingCard, Divider} from 'react-native-elements';

export default class IncorrectAnswerScreen extends Component {
  render() {
    return (
      <>
        <Header
          leftComponent={{ icon: 'chevron-left', color: '#fff' }}
          centerComponent={{ text: '2020年のドラマ', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Card>
          <Card.Title>Q.1</Card.Title>
          <Card.Divider/>
          <Text style={{marginBottom: 10}}>
            不正解×
          </Text>
        </Card>
        <Card>
          <Card.Title>ヒント</Card.Title>
          <Card.Divider/>
          <Text style={{marginBottom: 10}}>
            韓国語文章
          </Text>
          <Text style={{marginBottom: 10}}>
            日本語解説
          </Text>
          <Button
            title="もう一度解く"
            onPress={() => {
              this.props.navigation.navigate('Question')
            }}
          />
        </Card>
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
