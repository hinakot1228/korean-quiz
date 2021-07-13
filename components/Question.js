import React, { useState } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

export default function Question(props) {
  const {navigation} = props;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] =useState(0);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
      setVisible(!visible);
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect==true) {
      setScore(score + 1);
    } 
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const correctNumber = score;
      navigation.navigate('Score', {correctNumber});
    }
  }

  return (
    <View>
      <Card containerStyle={{top: 70, height:250}}>
        <Card.Title>Q.{currentQuestion + 1}</Card.Title>
        <Card.Divider style={{marginBottom: 20}}/>
        <Text h5 style={{paddingBottom: 30}}>
          以下のセリフを{questions[currentQuestion].language}にしてみよう。
        </Text>
        <Text h4 style={{textAlign: 'center'}}>
          ❝{questions[currentQuestion].questionText}❞
        </Text>
        <Button
            title='ヒント'
            onPress={toggleOverlay}
            containerStyle={{position:'absolute', top:180, left: 230,width: '30%'}}
        />
      </Card>
      <View style={{top: 90 }}>
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <Button
            title={answerOption.answerText}
            onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}
          />
        ))}
      </View>
      <Overlay isVisible={visible} overlayStyle={{height: '60%', width: '85%', top: 50}}>
        <Text h2 style={{marginTop: 20,marginLeft: 20,marginBottom: 20}}>ヒント</Text>
        {questions[currentQuestion].hintWords.map((hintWord) => (
          <Text h4 style={{marginLeft: 20,marginBottom: 20}}>{hintWord.korean}：{hintWord.japanese}</Text>
        ))}
        <Button
          title="閉じる"
          onPress={toggleOverlay}
          containerStyle={{position:'absolute', bottom: 0, width: '97%'}}
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