import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Image } from 'react-native';
import {Card, ListItem, Header, Button, Icon, Text, PricingCard, Divider} from 'react-native-elements';

export default class CorrectAnswerScreen extends Component {
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
            正解〇
          </Text>
        </Card>
        <Card>
          <Card.Title>解説</Card.Title>
          <Card.Divider/>
          <Text style={{marginBottom: 10}}>
            韓国語文章
          </Text>
          <Text style={{marginBottom: 10}}>
            日本語解説
          </Text>

          <Button
            title="次の問題へ"
            onPress={() => {
              this.props.navigation.navigate('Score')
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
