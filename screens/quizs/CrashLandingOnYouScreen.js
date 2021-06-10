import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

export default function CrashLandingOnYouScreen( {navigation}, props ) {
  const questions = [
    {
      language: '韓国語',
      questionText: '間違って乗った汽車が時には目的地に連れていってくれると。',
			answerOptions: [
				{ answerText: '안돼서 탄 기차가 때론 목적지에 데려다 준다고.', isCorrect: false, correctness:'✕' },
				{ answerText: '잘못 탄 기차가 때론 목적지에 데리고 준다고.', isCorrect: false, correctness:'〇' },
				{ answerText: '잘못 탄 기차가 따론 목적지에 데려다 준다고.', isCorrect: false, correctness:'✕' },
				{ answerText: '잘못 탄 기차가 때론 목적지에 데려다 준다.', isCorrect: true, correctness:'✕' },
			],
    },
    {
      language: '日本語',
      questionText: '바람이 왜 부는 거 같아요? 지나가려고 부는 거예요. 머물려고 부는 게 아니고.',
			answerOptions: [
				{ answerText: '風はなぜ吹くと思いますか？　過ぎようと吹くんです。留まろうと吹くんじゃなくて。', isCorrect: true, correctness:'〇' },
				{ answerText: '風はなぜ歌うと思いますか？　過ぎようと歌うんです。留まろうと歌うんじゃなくて。', isCorrect: false, correctness:'✕' },
				{ answerText: '風はなぜ吹くと思いますか？　過ぎて吹くんです。留まって吹くんじゃなくて。', isCorrect: false, correctness:'✕' },
				{ answerText: '願いはなぜ吹くと思いますか？　過ぎようと吹くんです。留まろうと吹くんじゃなくて。', isCorrect: false, correctness:'✕' },
			],
    },
    {
      language: '韓国語',
      questionText: 'いくら遠くに行っても最後は帰ってくるんだ。',
			answerOptions: [
				{ answerText: '얼마 먼 길을 떠나도 결국 돌아오는 거야.', isCorrect: false, correctness:'✕' },
				{ answerText: '아무리 먼 길을 떠나도 결국 돌아가는 거야.', isCorrect: false, correctness:'✕' },
				{ answerText: '아무리 먼 길을 떠나도 결국 돌아오는 거야.', isCorrect: true, correctness:'〇' },
				{ answerText: '아무리 머는 길을 떠나도 결국 돌아오는 거야.', isCorrect: false, correctness:'✕' },
			],
    },
    {
      language: '韓国語',
      questionText: '人生で決して忘れてはいけない人は憎い人じゃなく好きな人だ。',
			answerOptions: [
				{ answerText: '인생에서 절대 잊어버리지 말아야 할 사람은 미운 사람이 아니고 좋은 사람이요.', isCorrect: true, correctness:'✕' },
				{ answerText: '인생에서 절대 잊어버리지 말아야 할 사람은 밉은 사람이 아니고 좋은 사람이요.', isCorrect: false, correctness:'✕' },
				{ answerText: '인생에서 절대 잊어버리지 마라야 할 사람은 미운 사람이 아니고 좋은 사람이요.', isCorrect: false, correctness:'✕' },
				{ answerText: '인생에서 절대 잊어버려야 할 사람은 미운 사람이 아니고 좋은 사람이요.', isCorrect: false, correctness:'〇' },
			],
    },
    {
      language: '日本語',
      questionText: 'あなたが日常の中で探すことができて探さなければならない小さな幸せを逃さないでくれたら嬉しい。',
			answerOptions: [
				{ answerText: '당신이 일상 속에서 찾을 수 있고 찾아야 할 작은 행복들을 놓치지 말아줬으면 해요.', isCorrect: true, correctness:'✕' },
				{ answerText: '당신이 일상 안에서 찾을 수 있고 찾아야 할 작은 행복들을 놓치지 말아줬으면 해요.', isCorrect: false, correctness:'✕' },
				{ answerText: '당신이 일상 속에서 찾은 수 있고 찾아야 할 적은 행복들을 놓치지 말아줬으면 해요.', isCorrect: false, correctness:'✕' },
				{ answerText: '당신이 일상 속에서 찾을 수 있고 찾아야 할 작은 행복들을 도망가지 말아줬으면 해요.', isCorrect: false, correctness:'〇' },
			],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] =useState(0);
  const [visible, setVisible] = useState(false);
  const [correctness, setCorrectness] = useState('');

  const toggleOverlay = (isCorrect) => {
    if (isCorrect) {
      setVisible(!visible);
    } else {
      setVisible(!visible);
    }
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      // 正解
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // setShowScore(true);
    }
  }



  return (
    <View>
      <ThemeProvider theme={theme}>
        <Header
          containerStyle={{ position: 'absolute', top: 0 }}
          centerComponent={{ text: '椿の花咲く頃', style: { color: '#fff' } }}
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