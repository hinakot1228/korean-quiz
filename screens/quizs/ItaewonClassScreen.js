import React, { Component, useState, useEffect } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';
import HeaderComponent from '../../components/Header';

export default function ItaewonClassScreen(props) {
  const {navigation} = props;

  const questions = [
    {
      language: '韓国語',
      questionText: '俺の価値をお前が決めるな。',
			answerOptions: [
				{ answerText: '네 가치를 내가 정하지 마.', isCorrect: false },
				{ answerText: '내 가치를 네가 정하지 마.', isCorrect: true },
				{ answerText: '내 같이를 네가 정하지 마.', isCorrect: false },
				{ answerText: '내 가치를 네가 정해라.', isCorrect: false },
			],
      hintWords: [
				{ korean: '가치', japanese: '価値' },
				{ korean: '정하다', japanese: '決める' },
				{ korean: '-지 마', japanese: '―するな' },
			],
    },
    {
      language: '日本語',
      questionText: '살아만 있다면 뭐든 별게 아니야.',
			answerOptions: [
				{ answerText: '生きてさえいれば何だってたいしたことない', isCorrect: true },
				{ answerText: '愛してさえいれば何だってたいしたことない', isCorrect: false },
				{ answerText: '生きてさえいれば何だって星ではない', isCorrect: false },
				{ answerText: '生きていれば何だってたいしたことない', isCorrect: false },
			],
      hintWords: [
				{ korean: '살다', japanese: '生きる' },
				{ korean: '뭐든', japanese: '何でも' },
				{ korean: '별게 아니다', japanese: '大したことない' },
			],
    },
    {
      language: '韓国語',
      questionText: '望んだとおりに全てを手に入れる。それがまさに僕の夢だから',
			answerOptions: [
				{ answerText: '원하는 만큼 다 가질 거야. 그게 바로 내 꿈일 테니까', isCorrect: false },
				{ answerText: '원하는 대로 다 가질 거야. 그게 바로 내 꼼일 테니까', isCorrect: false },
				{ answerText: '원하는 대로 다 가질 거야. 그게 바로 내 꿈일 테니까', isCorrect: true },
				{ answerText: '원하는 대로 다 가지을 거야. 그게 바로 내 꿈이을 테니까', isCorrect: false },
			],
      hintWords: [
				{ korean: '원하다', japanese: '望む' },
				{ korean: '가지다', japanese: '持つ、手に入れる' },
				{ korean: '바로', japanese: 'まさに' },
				{ korean: '꿈', japanese: '夢' },
			],
    },
    {
      language: '日本語',
      questionText: '제가 생각하는 강함은 사람에게서 나옵니다.',
			answerOptions: [
				{ answerText: '僕は考える経験は人から出てきます。', isCorrect: false },
				{ answerText: '僕は考える強い人から出てきます。', isCorrect: false },
				{ answerText: '僕は考える強さは愛から出てきます。', isCorrect: false },
				{ answerText: '僕は考える強さは人から出てきます。', isCorrect: true },
      ],
      hintWords: [
        { korean: '생각하다', japanese: '考える' },
        { korean: '강하다', japanese: '強い' },
        { korean: '사람', japanese: '人' },
        { korean: '나오다', japanese: '出る' },
      ],
    },
    {
      language: '日本語',
      questionText: '깊은 어둠에 가둬봐라 나는 홀로 빛나는 돌덩이',
			answerOptions: [
				{ answerText: '甲は闇に閉じこめておけ 私は一人で輝く石ころ', isCorrect: false },
				{ answerText: '深い闇に閉じこめておけ 私は一人で借金が出る石ころ', isCorrect: false },
				{ answerText: '深い闇に行け 私は一人で輝く石ころ', isCorrect: false },
				{ answerText: '深い闇に閉じこめておけ 私は一人で輝く石ころ', isCorrect: true },
			],
      hintWords: [
				{ korean: '깊다', japanese: '深い' },
				{ korean: '어둡다', japanese: '暗い' },
				{ korean: '가두다', japanese: '閉じ込める' },
				{ korean: '홀로', japanese: '一人' },
				{ korean: '빛나다', japanese: '光る' },
				{ korean: '돌덩이', japanese: '石ころ' },
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

  return (
    <View  style={{ backgroundColor: '#FFFFFF', height: '100%'}}>
      <View style={{flex: 1}} >
        <Header
          containerStyle={{ width: '100%' ,height: '100%'}}
          centerComponent={{ text: '梨泰院クラス', style: { color: '#fff', fontSize:17 } }}
          rightComponent={{ 
            icon: 'home', 
            color: '#fff',
            onPress: () => navigation.navigate('Start')
          }}
        />
      </View>
      <View style={{flex: 5, justifyContent: 'space-around', backgroundColor: 'skyblue', padding:'3%'}} >
        <View style={{  backgroundColor: 'white', height: '100%', padding:'5%'}}>
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
        {/* <Card containerStyle={{height:'100%', margin:0}}>
          <Card.Title>Q.{currentQuestion + 1}</Card.Title>
          <Card.Divider style={{marginBottom: '3%'}}/>
            <Text h5 style={{marginBottom: '3%'}}>
              以下のセリフを{questions[currentQuestion].language}にしてみよう。
            </Text>
            <Text style={{textAlign: 'center'}}>
              ❝{questions[currentQuestion].questionText}❞
            </Text>
            
            <View style={{position:'absolute', bottom: 0,}}>
              <Button
                title='ヒント'
                onPress={toggleOverlay}
                containerStyle={{position:'absolute', bottom:'50%',width: '30%'}}
              />
            </View>
        </Card> */}
      </View>
      <View style={{flex: 5, backgroundColor: 'rgb(32, 137, 220)', height: '100%'}} >
        <View style={{height: '100%'}}>
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <View style={{flex:1, height: '100%', justifyContent: 'center', borderBottomColor: 'black', borderBottomWidth: 1}}>
              <Button
                title={answerOption.answerText}
                onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}