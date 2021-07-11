import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Image } from 'react-native';
import {ThemeProvider,Card, ListItem, Header, Button, Icon, Text, PricingCard, Divider} from 'react-native-elements';

export default function ScoreScreen({navigation}) {
  const [text, setText] = useState("");
  const { score } = navigation.state.params;
  const [scoreText, setScoreText] = useState("");

  useEffect(() => {
    setText(score);
  }, []);

  // useEffect(() => {
  //   const a = score;
  //   if(a==5) {
  //     setScoreText("5");
  //   }
  //   else if(3<=a<=4) {
  //     setScoreText("3-4");
  //   }
  //   else if(0<=a<=2) {
  //     setScoreText("0-2");
  //   }
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Header
          containerStyle={{ position: 'absolute', top: 0, width: '100%' }}
          centerComponent={{ text: 'ドラマのなかの韓国語', style: { color: '#fff', fontSize:17 } }}
          rightComponent={{ 
            icon: 'home', 
            color: '#fff',
            onPress: () => navigation.navigate('Start')
          }}
        />
        <Text h3 style={{paddingBottom:100}}>スコア</Text>
        <Text h4 style={{marginBottom: 10,}}>5点満点中</Text>
        <Text h2 style={{marginBottom: 50,}}>
          {text}点
        </Text>
        {/* <Text style={{marginBottom: 100}}>{scoreText}</Text> */}
        <Button
          title="トップに戻る >>"
                  onPress={() => {
                    navigation.navigate('Start')
                  }}
          buttonStyle={{width: 180, fontSize: 100}}
        />
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
