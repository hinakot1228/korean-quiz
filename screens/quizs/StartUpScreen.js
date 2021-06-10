import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

export default function StartUpScreen( {navigation}, props ) {
  const questions = [
    {
      language: '韓国語',
      questionText: 'お前はコスモスだよ。まだ春じゃない。ゆっくり待てば秋に一番きれいに咲くよ。',
			answerOptions: [
				{ answerText: '넌 코스모스야. 아직 봄이잖아. 천천히 기다리면 가을에 가장 예쁘게 필거야.', isCorrect: true, correctness:'〇' },
				{ answerText: '넌 고스모스야. 아직 봄이잖아. 천천히 기다리면 가을에 가장 예쁘게 필거야.', isCorrect: false, correctness:'✕' },
				{ answerText: '넌 코스모스야. 아직 붐이잖아. 천천히 기다리면 가을에 가장 예쁘게 필거야.', isCorrect: false, correctness:'✕' },
				{ answerText: '넌 코스모스야. 아직 봄이잖아. 천천히 기다리면 가을에 가장 예쁘게 빌거야.', isCorrect: false, correctness:'✕' },
			],
    },
    {
      language: '韓国語',
      questionText: 'ずっと晴れている日なら世界が全て砂漠だって。雨も降って雪も降らなきゃ。地面から草も出ておいしいみかんもできるんだよ。',
			answerOptions: [
				{ answerText: '만약 맑은 날이면 세상이 온통 사막이라고. 비도 오고 눈도 오고 해야 땅에서 풀도 나고 맛난 귤도 나지.', isCorrect: false, correctness:'✕' },
				{ answerText: '마냥 맑은 날이면 세상이 온통 사막이라고. 비도 내리고 눈도 내리고 해야 땅에서 풀도 나고 맛난 귤도 나지.', isCorrect: false, correctness:'✕' },
				{ answerText: '마냥 맑은 날이면 세상이 온통 사막이라고. 비도 오고 눈도 오고 해야 땅에서 불도 나고 맛난 귤도 나지.', isCorrect: false, correctness:'✕' },
				{ answerText: '마냥 맑은 날이면 세상이 온통 사막이라고. 비도 오고 눈도 오고 해야 땅에서 풀도 나고 맛난 귤도 나지.', isCorrect: true, correctness:'〇' },
			],
    },
    {
      language: '韓国語',
      questionText: '내 선택을 단 한 번도, 후회해 본 적이 없어요. 기를 쓰고 그렇게 만들었거든.',
			answerOptions: [
				{ answerText: '自分の選択を一度も後悔した敵がいないです。躍起になってそうしたんだよ。', isCorrect: false, correctness:'✕' },
				{ answerText: '自分の選択を一度も後悔したことがないです。気を使ってそうしたんだよ。', isCorrect: false, correctness:'✕' },
				{ answerText: '自分の洗濯を一度も後悔したことがないです。躍起になってそうしたんだよ。', isCorrect: false, correctness:'✕' },
				{ answerText: '自分の選択を一度も後悔したことがないです。躍起になってそうしたんだよ。', isCorrect: true, correctness:'〇' },
			],
    },
    {
      language: '日本語',
      questionText: 'さまよってもいいから地図のない航海に出ることも大丈夫そうだ。君と一緒なら',
			answerOptions: [
				{ answerText: '헤매도 좋아서 지도없는 항해를 떠나는 것도 괜찮겠다. 너와 함께라면.', isCorrect: false, correctness:'✕' },
				{ answerText: '헤매도 좋으니 지도없는 향해를 떠나는 것도 괜찮겠다. 너와 함께라면.', isCorrect: false, correctness:'✕' },
				{ answerText: '헤매도 좋으니 지도없는 항해에 떠나는 것도 괜찮겠다. 너와 함께라면.', isCorrect: false, correctness:'✕' },
				{ answerText: '헤매도 좋으니 지도없는 항해를 떠나는 것도 괜찮겠다. 너와 함께라면.', isCorrect: true, correctness:'〇' },
			],
    },
    {
      language: '日本語',
      questionText: '너는 저기 있는 겨우 먼지같은 별이 맞아. 항성이고 달보다 어마어마하게 커. 그러니까 도망치지 마',
			answerOptions: [
				{ answerText: '君はあそこにある埃のような星だよ。恒星で月よりも物凄く大きい。だから逃げないで', isCorrect: false, correctness:'✕' },
				{ answerText: '君はあそこにある最初のような星だよ。恒星で月よりも物凄く大きい。だから逃げないで', isCorrect: false, correctness:'✕' },
				{ answerText: '君はあそこにある埃のような星だよ。恒星で月よりも物凄く大きい。だから逃げないで', isCorrect: false, correctness:'✕' },
				{ answerText: '君はあそこにある埃のような星だよ。恒星で月よりもまあまあ大きい。だから逃げないで', isCorrect: true, correctness:'〇' },
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
          centerComponent={{ text: 'スタートアップ', style: { color: '#fff' } }}
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