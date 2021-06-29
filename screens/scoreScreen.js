import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Image } from 'react-native';
import {ThemeProvider,Card, ListItem, Header, Button, Icon, Text, PricingCard, Divider} from 'react-native-elements';

export default function ScoreScreen({navigation}) {
  const [text, setText] = useState("");
  const { score } = navigation.state.params;

  useEffect(() => {
    setText(score);
  }, []);

  return (
    <View>
      <ThemeProvider theme={theme}>
        <Header
          containerStyle={{ position: 'absolute', top: 0 }}
          centerComponent={{ text: 'スタートアップ', style: { color: '#fff' } }}
          rightComponent={{ 
            icon: 'home', 
            color: '#fff',
            onPress: () => navigation.navigate('Start')
          }}
        />
        <Card containerStyle={{top: 70, height:'50%'}}>
          <Card.Title>スコア</Card.Title>
          <Card.Divider/>
          <Text style={{marginBottom: 10}}>
            {text}点
          </Text>
        </Card>
        <Button
          title="トップに戻る"
          onPress={() => {
            navigation.navigate('Start')
          }}
        />
      </ThemeProvider>
    </View>
  );
}

const theme = {
  Button: {
    containerStyle: {
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15,
    },
    raised: true,
  },
  colors: {
    primary: '#9fc0d1',
  },
};