import React, { Component, useState, useEffect } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

export default function WhenTheCamelliaBloomsScreen(props) {
  const {navigation} = props;

  const questions = [
    {
      language: '韓国語',
      questionText: '幸せになる資格が十分にみなぎって溢れている人です',
			answerOptions: [
				{ answerText: '행복할 자격이 충분히 차고 넘치는 사람이요.', isCorrect: false, },
				{ answerText: '행복해질 자격이 충분히 차고 넘치는 사람이요.', isCorrect: true, },
				{ answerText: '행복해질 자격이 춘분히 차고 넘치는 사람이요.', isCorrect: false, },
				{ answerText: '행복해질 자격이 충분히 차고 남치는 사람이요.', isCorrect: false, },
			],
      hintWords: [
        { korean: '아/어지다', japanese: '-になる' },
        { korean: '충분히', japanese: '十分に' },
        { korean: '넘치다', japanese: '溢れる' },
      ],
    },
    {
      language: '韓国語',
      questionText: '椿の花言葉のおかげであんたの星回りは良くなるよ',
			answerOptions: [
				{ answerText: '동백꽃 꽃말 덕에 니 팔자는 빌거야', isCorrect: false, },
				{ answerText: '동백꽃 꽃말 덕에 너 팔자는 필거야', isCorrect: true, },
				{ answerText: '동백꽃 꽃말 덕에 니 팔차는 필거야', isCorrect: false, },
				{ answerText: '동백꽃 꽃언어 덕에 니 팔자는 필거야', isCorrect: false, },
			],
      hintWords: [
        { korean: '꽃말', japanese: '花言葉' },
        { korean: '팔자가 피다', japanese: '星回りが良くなる' },
        { korean: 'ㄹ거다', japanese: '-になるだろう' },
      ],
    },
    {
      language: '日本語',
      questionText: '남들 보기에 어떻든 나 보기에 행복하면 됐죠',
			answerOptions: [
				{ answerText: '他人を見ることはどうであれ自分を見ることで幸せなら良いんです', isCorrect: false, },
				{ answerText: '他人の目にはどうであれ自分の目で幸せなら良いんです', isCorrect: true, },
				{ answerText: '南を見るのはどうであれ自分の目で幸せなら良いんです', isCorrect: false, },
				{ answerText: '他人の目にはどうしても自分の目で幸せなら良いんです', isCorrect: false, },
			],
      hintWords: [
        { korean: '남', japanese: '他人' },
        { korean: '보기에', japanese: '-が見るに、-の目で' },
        { korean: '어떻든', japanese: 'どうであれ' },
      ],
    },
    {
      language: '日本語',
      questionText: '다정하고 싶어요. 다정은 공짜니까. 그냥 서로 좀 친절해도 되는 거잖아요?',
			answerOptions: [
				{ answerText: '優しくなりたいです。 優しさはタダだから。お互いにちょっと親切でも良いんじゃないですか。', isCorrect: true, },
				{ answerText: '優しくなりたいです。 優しさはタダだから。お互いにちょっと親切になっても良いんじゃないですか。', isCorrect: false, },
				{ answerText: '優しくなりたいです。 多点はタダだから。お互いにちょっと親切でも良いんじゃないですか。', isCorrect: false, },
				{ answerText: '優しくなりたいです。 優しさはタダだから。西でちょっと親切でも良いんじゃないですか。', isCorrect: false, },
			],
      hintWords: [
        { korean: '다정', japanese: '多情、優しいこと' },
        { korean: '서로', japanese: 'お互い' },
        { korean: '-아/어도 되다', japanese: '-してもよい' },
      ],
    },
    {
      language: '韓国語',
      questionText: 'この近所でですね、一番強くて、一番タフで、一番すばらしくて、一番立派です。',
			answerOptions: [
				{ answerText: '이 동네에서요, 제일로 세고요, 제일로 강하고, 제일로 훌륭하고, 제일로 창해요.', isCorrect: false, },
				{ answerText: '이 동네에서요, 제일로 새고요, 제일로 강하고, 제일로 훌륭하고, 제일로 장해요.', isCorrect: false, },
				{ answerText: '이 동네에서요, 제일로 세고요, 제일로 강하고, 제일로 훌륭하고, 제일로 장해요.', isCorrect: true, },
				{ answerText: '이 동네에서요, 제일로 세고요, 제일로 강하고, 제일로 후륭하고, 제일로 장해요.', isCorrect: false, },
			],
      hintWords: [
        { korean: '세다', japanese: '強い' },
        { korean: '훌륭하다', japanese: '素晴らしい、立派だ' },
        { korean: '장하다', japanese: '素晴らしい、立派だ' },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] =useState(0);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
      setVisible(!visible);
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
              onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}
            />
          ))}
        </View>
        <Overlay isVisible={visible} overlayStyle={{height: '70%', width: '85%', top: 50}}>
          <Text h2>ヒント</Text>
          {questions[currentQuestion].hintWords.map((hintWord) => (
            <Text h4>{hintWord.korean}：{hintWord.japanese}</Text>
          ))}
          <Button
            title="閉じる"
            onPress={toggleOverlay}
          />
        </Overlay>
      </ThemeProvider>
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