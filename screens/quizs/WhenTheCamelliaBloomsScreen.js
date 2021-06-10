import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

export default function WhenTheCamelliaBloomsScreen( {navigation}, props ) {
  const questions = [
    {
      language: '韓国語',
      questionText: '幸せになる資格が十分にみなぎって溢れている人です',
			answerOptions: [
				{ answerText: '행복할 자격이 충분히 차고 넘치는 사람이요.', isCorrect: false, correctness:'✕' },
				{ answerText: '행복해질 자격이 충분히 차고 넘치는 사람이요.', isCorrect: true, correctness:'〇' },
				{ answerText: '행복해질 자격이 춘분히 차고 넘치는 사람이요.', isCorrect: false, correctness:'✕' },
				{ answerText: '행복해질 자격이 충분히 차고 남치는 사람이요.', isCorrect: false, correctness:'✕' },
			],
    },
    {
      language: '韓国語',
      questionText: '椿の花言葉のおかげであんたの星回りは良くなるよ',
			answerOptions: [
				{ answerText: '동백꽃 꽃말 덕에 니 팔자는 빌거야', isCorrect: false, correctness:'〇' },
				{ answerText: '동백꽃 꽃말 덕에 너 팔자는 필거야', isCorrect: true, correctness:'✕' },
				{ answerText: '동백꽃 꽃말 덕에 니 팔차는 필거야', isCorrect: false, correctness:'✕' },
				{ answerText: '동백꽃 꽃언어 덕에 니 팔자는 필거야', isCorrect: false, correctness:'✕' },
			],
    },
    {
      language: '日本語',
      questionText: '남들 보기에 어떻든 나 보기에 행복하면 됐죠',
			answerOptions: [
				{ answerText: '他人を見ることはどうであれ自分を見ることで幸せなら良いんです', isCorrect: false, correctness:'✕' },
				{ answerText: '他人の目にはどうであれ自分の目で幸せなら良いんです', isCorrect: true, correctness:'✕' },
				{ answerText: '南を見るのはどうであれ自分の目で幸せなら良いんです', isCorrect: false, correctness:'〇' },
				{ answerText: '他人の目にはどうしても自分の目で幸せなら良いんです', isCorrect: false, correctness:'✕' },
			],
    },
    {
      language: '日本語',
      questionText: '다정하고 싶어요. 다정은 공짜니까. 그냥 서로 좀 친절해도 되는 거잖아요?',
			answerOptions: [
				{ answerText: '優しくなりたいです。 優しさはタダだから。お互いにちょっと親切でも良いんじゃないですか。', isCorrect: true, correctness:'✕' },
				{ answerText: '優しくなりたいです。 優しさはタダだから。お互いにちょっと親切になっても良いんじゃないですか。', isCorrect: false, correctness:'✕' },
				{ answerText: '優しくなりたいです。 多点はタダだから。お互いにちょっと親切でも良いんじゃないですか。', isCorrect: false, correctness:'✕' },
				{ answerText: '優しくなりたいです。 優しさはタダだから。西でちょっと親切でも良いんじゃないですか。', isCorrect: false, correctness:'〇' },
			],
    },
    {
      language: '韓国語',
      questionText: 'この近所でですね、一番強くて、一番タフで、一番すばらしくて、一番立派です。',
			answerOptions: [
				{ answerText: '이 동네에서요, 제일로 세고요, 제일로 강하고, 제일로 훌륭하고, 제일로 창해요.', isCorrect: false, correctness:'✕' },
				{ answerText: '이 동네에서요, 제일로 새고요, 제일로 강하고, 제일로 훌륭하고, 제일로 장해요.', isCorrect: false, correctness:'✕' },
				{ answerText: '이 동네에서요, 제일로 세고요, 제일로 강하고, 제일로 훌륭하고, 제일로 장해요.', isCorrect: true, correctness:'✕' },
				{ answerText: '이 동네에서요, 제일로 세고요, 제일로 강하고, 제일로 후륭하고, 제일로 장해요.', isCorrect: false, correctness:'〇' },
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