import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay} from 'react-native-elements';
// import {
//   MatchingQuestion,
//   MultipleChoiceQuestion,
//   QuizContainer,
//   WritingQuestion,
// } from 'react-native-quiz-maker';

export default function QuestionScreen() {
  const questions = [
    {
      questionText: '俺の価値をお前が決めるな。',
			answerOptions: [
				{ answerText: '네 가치를 내가 정하지 마.', isCorrect: false },
				{ answerText: '내 가치를 네가 정하지 마.', isCorrect: true },
				{ answerText: '내 같이를 네가 정하지 마.', isCorrect: false },
				{ answerText: '내 가치를 네가 정해라.', isCorrect: false },
			],
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] =useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <View>
      {/* <ThemeProvider theme={theme}> */}
        <Header
          containerStyle={{ position: 'absolute', top: 0 }}
          // leftComponent={{ 
          //   icon: 'chevron-left', 
          //   color: '#fff',
          //   onPress: () => {
          //     this.props.navigation.navigate('UnitSelection')
          //   },
          // }}
          centerComponent={{ text: 'ドラマの名言で覚える韓国語', style: { color: '#fff' } }}
          rightComponent={{ 
            icon: 'home', 
            color: '#fff',
            onPress: () => {
              this.props.navigation.navigate('Start')
            },
          }}
        />
        <Card containerStyle={{top: 70, height:'50%'}}>
          <Card.Title>Q.{currentQuestion + 1}</Card.Title>
          <Card.Divider/>
          <Text h5 style={{paddingBottom: 10}}>
            {/* 以下のセリフを{this.props.language}にしてみよう。 */}
          </Text>
          <Text h4>問題：{questions[0].questionText}</Text>
        </Card>
        <View style={{top: '20%' }} >
          {questions[0].answerOptions.map((answerOption) => (
            <Button
              title={answerOption.answerText}
              onPress={
                // () => {
                // this.props.navigation.navigate('CorrectAnswer')
                // },
                () => handleAnswerOptionClick(answerOption.isCorrect)
              }
              
            />
          ))}
          
          {/* <Button
            title={this.props.answerSentence}
            // onClick={}
          />
          <Button
            title={this.props.answerSentence}
            // onClick={}
          />
          <Button
            title={this.props.answerSentence}
            // onClick={}
          /> */}
        </View>
      {/* </ThemeProvider> */}
    </View>
  );
}



// export default class QuestionScreen extends Component {
//   render() {

// }

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