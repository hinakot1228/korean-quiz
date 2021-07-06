import React, { Component, useState, useEffect } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

export default function StartUpScreen(props) {
  const {navigation} = props;

  const questions = [
    {
      language: '韓国語',
      questionText: 'お前はコスモスだよ。まだ春じゃない。ゆっくり待てば秋に一番きれいに咲くよ。',
			answerOptions: [
				{ answerText: '넌 코스모스야. 아직 봄이잖아. 천천히 기다리면 가을에 가장 예쁘게 필거야.', isCorrect: true, },
				{ answerText: '넌 코스모스야. 아직 봄이잖아. 천천히 기다리면 가울에 가장 예쁘게 필거야.', isCorrect: false, },
				{ answerText: '넌 코스모스야. 아직 붐이잖아. 천천히 기다리면 가을에 가장 예쁘게 필거야.', isCorrect: false, },
				{ answerText: '넌 코스모스야. 아직 봄이잖아. 천천히 기다리면 가을에 가장 예쁘게 빌거야.', isCorrect: false, },
			],
      hintWords: [
        { korean: '봄', japanese: '春' },
        { korean: '가을', japanese: '秋' },
        { korean: '피다', japanese: '咲く' },
      ],
    },
    {
      language: '韓国語',
      questionText: 'ずっと晴れている日なら世界が全て砂漠だって。雨も降って雪も降らなきゃ。地面から草も出ておいしいみかんもできるんだよ。',
			answerOptions: [
				{ answerText: '만약 맑은 날이면 세상이 온통 사막이라고. 비도 오고 눈도 오고 해야 땅에서 풀도 나고 맛난 귤도 나지.', isCorrect: false, },
				{ answerText: '마냥 맑은 날이면 세상이 온통 사막이라고. 비도 내리고 눈도 내리고 해야 땅에서 풀도 나고 맛난 귤도 나지.', isCorrect: false, },
				{ answerText: '마냥 맑은 날이면 세상이 온통 사막이라고. 비도 오고 눈도 오고 해야 땅에서 불도 나고 맛난 귤도 나지.', isCorrect: false, },
				{ answerText: '마냥 맑은 날이면 세상이 온통 사막이라고. 비도 오고 눈도 오고 해야 땅에서 풀도 나고 맛난 귤도 나지.', isCorrect: true, },
			],
      hintWords: [
        { korean: '마냥', japanese: 'ずっと' },
        { korean: '만약', japanese: 'もし' },
        { korean: '비가 오다', japanese: '雨が降る' },
        { korean: '눈이 오다', japanese: '雪が降る' },
        { korean: '풀', japanese: '草' },
      ],
    },
    {
      language: '韓国語',
      questionText: '내 선택을 단 한 번도, 후회해 본 적이 없어요. 기를 쓰고 그렇게 만들었거든.',
			answerOptions: [
				{ answerText: '自分の選択を一度も後悔した敵がいないです。躍起になってそうしたんだよ。', isCorrect: false, },
				{ answerText: '自分の選択を一度も後悔したことがないです。気を使ってそうしたんだよ。', isCorrect: false, },
				{ answerText: '自分の洗濯を一度も後悔したことがないです。躍起になってそうしたんだよ。', isCorrect: false, },
				{ answerText: '自分の選択を一度も後悔したことがないです。躍起になってそうしたんだよ。', isCorrect: true, },
			],
      hintWords: [
        { korean: '선택', japanese: '選択' },
        { korean: '-ㄴ/은 적이 있다', japanese: '-したことがある' },
        { korean: '기를 쓰다', japanese: '躍起になる' },
        { korean: '만들다', japanese: '作る、-ようにする' },
      ],
    },
    {
      language: '日本語',
      questionText: 'さまよってもいいから地図のない航海に出ることも大丈夫そうだ。君と一緒なら',
			answerOptions: [
				{ answerText: '해매도 좋으니 지도없는 항해를 떠나는 것도 괜찮겠다. 너와 함께라면.', isCorrect: false, },
				{ answerText: '헤매도 좋으니 지도없는 향해를 떠나는 것도 괜찮겠다. 너와 함께라면.', isCorrect: false, },
				{ answerText: '헤매도 좋으니 지도없는 항해에 떠나는 것도 괜찮겠다. 너와 함께라면.', isCorrect: false, },
				{ answerText: '헤매도 좋으니 지도없는 항해를 떠나는 것도 괜찮겠다. 너와 함께라면.', isCorrect: true, },
			],
      hintWords: [
        { korean: '헤매다', japanese: 'さまよう' },
        { korean: '항해', japanese: '航海' },
        { korean: '를 떠나다', japanese: '-に出る、旅立つ' },
      ],
    },
    {
      language: '日本語',
      questionText: '너는 저기 있는 겨우 먼지같은 별이 맞아. 항성이고 달보다 어마어마하게 커. 그러니까 도망치지 마',
			answerOptions: [
				{ answerText: '君はあそこにある埃のような星だよ。恒星で月よりも物凄く大きい。だから逃げないで', isCorrect: false, },
				{ answerText: '君はあそこにある最初のような星だよ。恒星で月よりも物凄く大きい。だから逃げないで', isCorrect: false, },
				{ answerText: '君はあそこにある埃のような星だよ。恒星で月よりも物凄く大きい。だから逃げないで', isCorrect: false, },
				{ answerText: '君はあそこにある埃のような星だよ。恒星で月よりもまあまあ大きい。だから逃げないで', isCorrect: true, },
			],
      hintWords: [
        { korean: '먼지', japanese: '埃' },
        { korean: '어마어마하다', japanese: 'ものすごい、厳めしい' },
        { korean: '도망치다', japanese: '逃げる' },
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
    <View style={{ backgroundColor: '#FFFFFF', height: 1000}}>
      <ThemeProvider theme={theme}>
        <Header
          containerStyle={{ position: 'absolute', top: 0, width: '100%' }}
          centerComponent={{ text: 'スタートアップ', style: { color: '#fff', fontSize:17 } }}
          rightComponent={{ 
            icon: 'home', 
            color: '#fff',
            onPress: () => navigation.navigate('Start')
          }}
        />
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
    primary: '#ffb6c1',
  },
};