import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

export default function Question( {navigation}, props ) {
  return (
    <View>
      <ThemeProvider theme={theme}>
        <Header
          containerStyle={{ position: 'absolute', top: 0 }}
          centerComponent={{ text: 'ドラマの名言で覚える韓国語', style: { color: '#fff' } }}
          rightComponent={{ 
            icon: 'home', 
            color: '#fff',
            onPress: () => navigation.navigate('Start')
          }}
        />
        <Card containerStyle={{top: 70, height:'50%'}}>
          <Card.Title>Q.{currentQuestion + 1}</Card.Title>
          <Card.Divider/>
          <Text h5 style={{paddingBottom: 10}}>
            以下のセリフを{questions[currentQuestion].language}にしてみよう。
          </Text>
          <Text h4 style={{textAlign: 'center'}}>
            ❝{questions[currentQuestion].questionText}❞
          </Text>
          <Button
              title='ヒント'
              onPress={toggleOverlay}
            />
        </Card>
        <View style={{top: '16%' }}>
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <Button
              title={answerOption.answerText}
              onPress={handleAnswerOptionClick}
            />
          ))}
        </View>
      </ThemeProvider>

      <Overlay isVisible={visible} overlayStyle={{height: '70%', width: '85%', top: 50}}>
        <Text h2>ヒント</Text>
        <Text h4>ヒント文</Text>
        <Button
          title="閉じる"
          onPress={toggleOverlay}
        />
      </Overlay>
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