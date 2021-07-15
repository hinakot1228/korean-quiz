import React, { Component, useState, useEffect } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

export default function CrashLandingOnYouScreen(props) {
  const {navigation} = props;

  const questions = [
    {
      language: '韓国語',
      questionText: '間違って乗った汽車が時には目的地に連れていってくれると。',
			answerOptions: [
				{ answerText: '안돼서 탄 기차가 때론 목적지에 데려다 준다고.', isCorrect: false, },
				{ answerText: '잘못 탄 기차가 때론 목적지에 데리고 준다고.', isCorrect: false, },
				{ answerText: '잘못 탄 기차가 따론 목적지에 데려다 준다고.', isCorrect: false, },
				{ answerText: '잘못 탄 기차가 때론 목적지에 데려다 준다.', isCorrect: true, },
			],
      hintWords: [
				{ korean: '잘못', japanese: '誤り' },
				{ korean: '타다', japanese: '乗る' },
				{ korean: '때로는', japanese: '時には' },
				{ korean: '데리다', japanese: '連れる' },
				{ korean: '아/어다 주다', japanese: '-してくれる' },
			],
    },
    {
      language: '日本語',
      questionText: '바람이 왜 부는 거 같아요? 지나가려고 부는 거예요. 머물려고 부는 게 아니고.',
			answerOptions: [
				{ answerText: '風はなぜ吹くと思いますか？　過ぎようと吹くんです。留まろうと吹くんじゃなくて。', isCorrect: true, },
				{ answerText: '風はなぜ歌うと思いますか？　過ぎようと歌うんです。留まろうと歌うんじゃなくて。', isCorrect: false, },
				{ answerText: '風はなぜ吹くと思いますか？　過ぎて吹くんです。留まって吹くんじゃなくて。', isCorrect: false, },
				{ answerText: '願いはなぜ吹くと思いますか？　過ぎようと吹くんです。留まろうと吹くんじゃなくて。', isCorrect: false, },
			],
      hintWords: [
				{ korean: '바람', japanese: '風' },
				{ korean: '불다', japanese: '吹く' },
				{ korean: '아/어려고', japanese: '-しようと' },
				{ korean: '머물다', japanese: '留まる、止まる' },
			],
    },
    {
      language: '韓国語',
      questionText: 'いくら遠くに行っても最後は帰ってくるんだ。',
			answerOptions: [
				{ answerText: '얼마 먼 길을 떠나도 결국 돌아오는 거야.', isCorrect: false, },
				{ answerText: '아무리 먼 길을 떠나도 결국 돌아가는 거야.', isCorrect: false, },
				{ answerText: '아무리 먼 길을 떠나도 결국 돌아오는 거야.', isCorrect: true, },
				{ answerText: '아무리 머는 길을 떠나도 결국 돌아오는 거야.', isCorrect: false, },
			],
      hintWords: [
				{ korean: '아무리', japanese: 'いくら、どんなに' },
				{ korean: '얼마', japanese: 'いくら、どれほど' },
				{ korean: '멀다', japanese: '遠い' },
				{ korean: '떠나다', japanese: '去る、離れる' },
				{ korean: '돌아오다', japanese: '帰ってくる' },
			],
    },
    {
      language: '韓国語',
      questionText: '人生で決して忘れてはいけない人は憎い人じゃなく好きな人だ。',
			answerOptions: [
				{ answerText: '인생에서 절대 잊어버리지 말아야 할 사람은 미운 사람이 아니고 좋은 사람이요.', isCorrect: true, },
				{ answerText: '인생에서 절대 잊어버리지 말아야 할 사람은 밉은 사람이 아니고 좋은 사람이요.', isCorrect: false, },
				{ answerText: '인생에서 절대 잊어버리지 마라야 할 사람은 미운 사람이 아니고 좋은 사람이요.', isCorrect: false, },
				{ answerText: '인생에서 절대 잊어버려야 할 사람은 미운 사람이 아니고 좋은 사람이요.', isCorrect: false, },
			],
      hintWords: [
				{ korean: '-지 말다', japanese: '-しない' },
				{ korean: '밉다', japanese: '憎い' },
			],
    },
    {
      language: '韓国語',
      questionText: 'あなたが日常の中で探すことができて探さなければならない小さな幸せを逃さないでくれたら嬉しい。',
			answerOptions: [
				{ answerText: '당신이 일상 속에서 찾을 수 있고 찾아야 할 작은 행복들을 놓치지 말아줬으면 해요.', isCorrect: true, },
				{ answerText: '당신이 일상 안에서 찾을 수 있고 찾아야 할 작은 행복들을 놓치지 말아줬으면 해요.', isCorrect: false, },
				{ answerText: '당신이 일상 속에서 찾은 수 있고 찾아야 할 적은 행복들을 놓치지 말아줬으면 해요.', isCorrect: false, },
				{ answerText: '당신이 일상 속에서 찾을 수 있고 찾아야 할 작은 행복들을 도망가지 말아줬으면 해요.', isCorrect: false, },
			],
      hintWords: [
				{ korean: '속', japanese: '（枠の）中' },
				{ korean: '안', japanese: '（囲まれた）中' },
				{ korean: '작다', japanese: '小さい' },
				{ korean: '적다', japanese: '少ない' },
				{ korean: '놓치다', japanese: '逃す' },
				{ korean: '도망가다', japanese: '逃る' },
			],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] =useState(0);
  const [visible, setVisible] = useState(false);
  const [scoreScore, setScoreScore] = useState(0);


  const toggleOverlay = () => {
      setVisible(!visible);
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect==true) {
      var correctScore = score + 1
      setScore(correctScore);
      // console.log(correctScore);
    } else {
      var correctScore = score;
      console.log(correctScore);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      console.log(correctScore);
      navigation.navigate('Score', {correctScore});
    }
  }
  const theme = {
    colors: {
      primary: '#ffb6c1',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <View  style={{ backgroundColor: '#FFFFFF', height: '100%'}}>
        <View style={{flex: 1}}>
          <Header
            containerStyle={{ width: '100%' ,height: '100%',backgroundColor: '#ffb6c1',}}
            centerComponent={{ text: '愛の不時着', style: { color: '#fff', fontSize:17 } }}
            rightComponent={{ 
              icon: 'home', 
              color: '#fff',
              onPress: () => navigation.navigate('Start')
            }}
          />
        </View>
        <View style={{flex: 5, justifyContent: 'space-around', backgroundColor: 'white', padding:'3%'}} >
          <View style={{  backgroundColor: 'white', height: '100%', padding:'5%', borderColor: 'gray', borderWidth: 2}}>
            <View style={{flex: 1, justifyContent: 'center',}}>
              <Text>Q.{currentQuestion + 1}</Text>
            </View>
            <View style={{flex:1, justifyContent: 'center',}}>
              <Text >
                以下のセリフを{questions[currentQuestion].language}にしてみよう。
              </Text>
            </View>
            <View  style={{ flex:4, justifyContent:'center'}}>
              <Text h4 style={{textAlign: 'center'}}>
                ❝{questions[currentQuestion].questionText}❞
              </Text>
            </View>
            <View style={{ flex:1 }}>
              <Button
                title='ヒント'
                onPress={toggleOverlay}
                containerStyle={{width: '30%', alignSelf: 'flex-end'}}
              />
            </View>
          </View>
        </View>
        <View style={{flex: 5, backgroundColor: '#ffb6c1', height: '100%'}} >
          <View style={{height: '100%'}}>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <View style={{flex:1, height: '100%', justifyContent: 'center', borderBottomColor: 'gray', borderBottomWidth: 2}}>
                <Button
                  title={answerOption.answerText}
                  onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}
                />
              </View>
            ))}
          </View>
        </View>
        <Overlay isVisible={visible} overlayStyle={{height: '60%', width: '85%', top: 50}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View>
            <Text h2 style={{textAlign: 'center'}}>ヒント</Text>
            </View>
          </View>
          <View style={{flex: 4}}>
            {questions[currentQuestion].hintWords.map((hintWord) => (
              <Text h4 style={{marginLeft: 20,marginBottom: 20}}>{hintWord.korean}：{hintWord.japanese}</Text>
            ))}
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Button
                title="閉じる"
                onPress={toggleOverlay}
                containerStyle={{width: '50%'}}
              />
          </View>
        </Overlay>
      </View>
    </ThemeProvider>
  );
}