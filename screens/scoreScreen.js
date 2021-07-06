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
          centerComponent={{ text: 'ドラマのなかの韓国語', style: { color: '#fff' } }}
          rightComponent={{ 
            icon: 'home', 
            color: '#fff',
            onPress: () => navigation.navigate('Start')
          }}
        />
        <Card containerStyle={{top: '30%', height:'50%'}}>
          <Card.Title>スコア</Card.Title>
          <Card.Divider/>
          <Text h4 style={{marginBottom: 10, textAlign: 'center'}}>5点満点中</Text>
          <Text h2 style={{marginBottom: 10, textAlign: 'center'}}>
             {text}点
          </Text>
        </Card>
        <View style={{top: '60%', width:'50%', flex:1, textAlign:'center'}}>
          <Button
            title="トップに戻る"
            onPress={() => {
              navigation.navigate('Start')
            }}
          />
        </View>
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
    primary: '#ffb6c1',
  },
};