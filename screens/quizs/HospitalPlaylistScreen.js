import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

export default function HospitalPlaylistScreen( {navigation}, props ) {
  const questions = [
    {
      language: '韓国語',
      questionText: '俺の価値をお前が決めるな。',
			answerOptions: [
				{ answerText: '네 가치를 내가 정하지 마.', isCorrect: false, correctness:'✕' },
				{ answerText: '내 가치를 네가 정하지 마.', isCorrect: true, correctness:'〇' },
				{ answerText: '내 같이를 네가 정하지 마.', isCorrect: false, correctness:'✕' },
				{ answerText: '내 가치를 네가 정해라.', isCorrect: false, correctness:'✕' },
			],
      questionTex: 'の価値をお前が決めるな。',
    },
    {
      language: '日本語',
      questionText: '살아만 있다면 뭐든 별게 아니야.',
			answerOptions: [
				{ answerText: '生きてさえいれば何だってたいしたことない', isCorrect: true, correctness:'〇' },
				{ answerText: '愛してさえいれば何だってたいしたことない', isCorrect: false, correctness:'✕' },
				{ answerText: '生きてさえいれば何だって星ではない', isCorrect: false, correctness:'✕' },
				{ answerText: '生きていれば何だってたいしたことない', isCorrect: false, correctness:'✕' },
			],
    },
    {
      language: '韓国語',
      questionText: '望んだとおりに全てを手に入れる。それがまさに僕の夢だから',
			answerOptions: [
				{ answerText: '원하는 만큼 다 가질 거야. 그게 바로 내 꿈일 테니까', isCorrect: false, correctness:'✕' },
				{ answerText: '원하는 대로 다 가질 거야. 그게 바로 내 꼼일 테니까', isCorrect: false, correctness:'✕' },
				{ answerText: '원하는 대로 다 가질 거야. 그게 바로 내 꿈일 테니까', isCorrect: true, correctness:'〇' },
				{ answerText: '원하는 대로 다 가지을 거야. 그게 바로 내 꿈이을 테니까', isCorrect: false, correctness:'✕' },
			],
    },
    {
      language: '日本語',
      questionText: '제가 생각하는 강함은 사람에게서 나옵니다.',
			answerOptions: [
				{ answerText: '僕は考える経験は人から出てきます。', isCorrect: false, correctness:'✕' },
				{ answerText: '僕は考える強い人から出てきます。', isCorrect: false, correctness:'✕' },
				{ answerText: '僕は考える強さは愛から出てきます。', isCorrect: false, correctness:'✕' },
				{ answerText: '僕は考える強さは人から出てきます。', isCorrect: true, correctness:'〇' },
			],
    },
    {
      language: '日本語',
      questionText: '깊은 어둠에 가둬봐라 나는 홀로 빛나는 돌덩이',
			answerOptions: [
				{ answerText: '甲は闇に閉じこめておけ 私は一人で輝く石ころ', isCorrect: false, correctness:'✕' },
				{ answerText: '深い闇に閉じこめておけ 私は一人で借金が出る石ころ', isCorrect: false, correctness:'✕' },
				{ answerText: '深い闇に行け 私は一人で輝く石ころ', isCorrect: false, correctness:'✕' },
				{ answerText: '深い闇に閉じこめておけ 私は一人で輝く石ころ', isCorrect: true, correctness:'〇' },
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
          centerComponent={{ text: '賢い医師生活', style: { color: '#fff' } }}
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