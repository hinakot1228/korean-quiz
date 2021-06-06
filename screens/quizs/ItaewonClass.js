import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

export default function QuestionScreen( {navigation} ) {
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
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] =useState(0);
  const [visible, setVisible] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      // 正解のモーダルを表示する
      
    } else {
      // 不正解のモーダルを表示する

    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <ThemeProvider theme={theme}>
        <Header
          containerStyle={{ position: 'absolute', top: 0 }}
          centerComponent={{ text: 'ドラマの名言で覚える韓国語', style: { color: '#fff' } }}
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
        </Card>
        <View style={{top: '16%' }} >
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <Button
              title={answerOption.answerText}
              onPress={
                () => handleAnswerOptionClick(answerOption.isCorrect)
              }
            />
          ))}
        </View>
      </ThemeProvider>

      {/* 正解の時のモーダルを表示する */}
      <View>
        <Button title="正解" onPress={toggleOverlay} />

        <Overlay isVisible={visible} overlayStyle={{height: '70%', width: '85%', top: 50}}>
          <Text h1>〇　正解</Text>
          <Button
            title="次の問題へ"
            onPress={toggleOverlay}
          />
        </Overlay>
      </View>

      {/* 不正解の時のモーダルを表示する */}
      <View>
        <Button title="不正解" onPress={toggleOverlay} />

        <Overlay isVisible={visible} overlayStyle={{height: '70%', width: '85%', top: 50}}>
          <Text h1>✕　不正解</Text>
          <Text h4>ヒント</Text>
          <Button
            title="もう一度解く"
            onPress={toggleOverlay}
          />
        </Overlay>
      </View>
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