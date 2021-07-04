import React, { Component, useState, useEffect } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

export default function ItaewonClassScreen(props) {
  const {navigation} = props;

  const questions = [
    {
      language: '韓国語',
      questionText: 'あんたは最近あんたのために何をしてあげてんの？',
			answerOptions: [
				{ answerText: '나는 요즘 날 위해 무엇을 해 주니?', isCorrect: false },
				{ answerText: '너는 요즘 너에 위해 무엇을 해 주니?', isCorrect: false },
				{ answerText: '너는 요즘 널 위해 무엇을 해 줬니?', isCorrect: false },
				{ answerText: '너는 요즘 널 위해 무엇을 해 주니?', isCorrect: true },
			],
    },
    {
      language: '韓国語',
      questionText: '最善を尽くします。',
			answerOptions: [
				{ answerText: '최선을 다했습니다.', isCorrect: false },
				{ answerText: '최선을 다 하겠습니다.', isCorrect: false },
				{ answerText: '최선을 다하겠습니다.', isCorrect: true },
				{ answerText: '최손을 다하겠습니다.', isCorrect: false },
			],
    },
    {
      language: '韓国語',
      questionText: '時間がもったいない。俺が好きなこと俺がしたいこと、今すぐやりながら生きるよ。',
			answerOptions: [
				{ answerText: '시간이 아까워. 내가 좋아하는 거, 내가 하고 싶은 거, 지금 바로 하면서 살래.', isCorrect: false },
				{ answerText: '시간이 아까워. 내가 좋아 하는 거, 내가 하고 싶은 거, 지금 당장 하면서 살래.', isCorrect: true },
				{ answerText: '시간이 아까워. 내가 좋아하는 거, 내가 하고 싶은 거, 지금 당장 하면서 살래.', isCorrect: false },
				{ answerText: '시간이 아깝어. 내가 좋아하는 거, 내가 하고 싶은 거, 지금 당장 하면서 살래.', isCorrect: false },
			],
    },
    {
      language: '韓国語',
      questionText: '判断の瞬間が満ち潮みたいに押し寄せてきたら、その中の大きなのいくつかは俺に聞いてみな。',
			answerOptions: [
				{ answerText: '판단의 순간들이 밀물처럼 밀어오면, 그중 큰 거 몇 개는 나한테 물어 봐.', isCorrect: false },
				{ answerText: '판단의 순간들이 밀물처럼 밀리면, 그중 큰 거 몇 개는 나한테 물어 봐.', isCorrect: false },
				{ answerText: '판단의 순간들이 밀물처럼 밀려오면, 그중 큰 거 몇 개는 나한테 묻어 봐.', isCorrect: false },
				{ answerText: '판단의 순간들이 밀물처럼 밀려오면, 그중 큰 거 몇 개는 나한테 물어 봐.', isCorrect: true },
			],
    },
    {
      language: '韓国語',
      questionText: '責任感を持って逃げずに最善を尽くした。今日よくやったよ。',
			answerOptions: [
				{ answerText: '책임감 있게 도망 안 가고 최선을 다했어. 오늘 너무 잘했어.', isCorrect: false },
				{ answerText: '책임감 있게  안 도망 가고 최선을 다했어. 오늘 너무 잘했어.', isCorrect: true },
				{ answerText: '책임감 있게 도망 안 가고 최선을 다 했어. 오늘 너무 잘했어.', isCorrect: false },
				{ answerText: '첵임감 있게 도망 안 가고 최선을 다했어. 오늘 너무 잘했어.', isCorrect: false },
			],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [showScore, setShowScore] = useState(false);
  const [score, setScore] =useState(0);
  const [visible, setVisible] = useState(false);
  // const [correctness, setCorrectness] = useState('');

  const toggleOverlay = () => {
    // if (isCorrect) {
      setVisible(!visible);
    // } else {
    //   setVisible(!visible);
    // }
  }

  const showScoreScreen = () => {
    navigation.navigate('Score', {score});
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setScore(score);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      showScoreScreen();
    }
  }

  return (
    <View>
      <ThemeProvider theme={theme}>
        <Header
          containerStyle={{ position: 'absolute', top: 0 }}
          centerComponent={{ text: '梨泰院クラス', style: { color: '#fff' } }}
          rightComponent={{ 
            icon: 'home', 
            color: '#fff',
            onPress: () => navigation.navigate('Start')
          }}
        />
        <Card containerStyle={{top: 70, height:'50%'}}>
          <Card.Title>Q.{currentQuestion + 1}</Card.Title>
          <Text>
            {score}
          </Text>
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
              onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}
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