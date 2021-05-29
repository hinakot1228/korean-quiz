import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Image } from 'react-native';
import {Card, ListItem, Header, Button, Icon, Text, PricingCard, Divider} from 'react-native-elements';

export default class QuestionScreen extends Component {
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
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Text>
        </Card>
        <Button
          title="答え〇"
          type="outline"
          onPress={() => {
            this.props.navigation.navigate('CorrectAnswer')
          }}
        />
        <Button
          title="答え×"
          type="outline"
          onPress={() => {
            this.props.navigation.navigate('IncorrectAnswer')
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
