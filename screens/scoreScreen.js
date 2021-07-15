import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Image } from 'react-native';
import {ThemeProvider,Card, ListItem, Header, Button, Icon, Text, PricingCard, Divider} from 'react-native-elements';

export default function ScoreScreen({navigation}) {
  const [text, setText] = useState("");
  const { correctScore } = navigation.state.params;
  const [scoreText, setScoreText] = useState("");

  useEffect(() => {
    setText(correctScore);
  }, []);

  
  useEffect(() => {
    const a = correctScore;
    console.log(a);
    if(a==5) {
      setScoreText("5점 만점에 5점!! 잘했어!!");
    }
    else if(2<a) {
      setScoreText("조금 만 더 힘내!!");
    }
    else {
      setScoreText("화이팅!");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <View style={{flex: 1, width: '100%'}}>
          <Header
            containerStyle={{ width: '100%' ,height: '100%', backgroundColor: '#ffb6c1',}}
            centerComponent={{ text: 'ドラマのなかの韓国語', style: { color: '#fff', fontSize:17 } }}
          />
        </View>
        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <Text h3>スコア</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text h4>5点満点中</Text>
          <Text h2>
            {text}点
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'space-around', alignItems: 'center'}}>
          <Text>{scoreText}</Text>
        </View>
        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <Button
            title="トップに戻る >>"
            onPress={() => {
              navigation.navigate('Start')
            }}
            containerStyle={{width: '100%'}}
          />
        </View>
      </View>
    </ThemeProvider>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
