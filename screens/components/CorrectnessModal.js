import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

function CorrectnessModal(props) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = (isCorrect) => {
    if (isCorrect) {
      // const [correctness, setCorrectness] = useState('〇');
      // const correctness = '〇';
      // setCorrectness('〇');
      setVisible(!visible);
    } else {
      // const correctness = '✕';
      // setCorrectness('✕');
      setVisible(!visible);
    }
  }
    return (
      <Overlay isVisible={visible} overlayStyle={{height: '70%', width: '85%', top: 50}}>
        <Text h1>{props.correctness}</Text>
        <Text h3>ヒント</Text>
        <Button
          title="次へ"
          onPress={toggleOverlay}
        />
      </Overlay>
    )
}

export default CorrectnessModal

// 
