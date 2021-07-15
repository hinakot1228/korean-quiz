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
				{ answerText: '나는 요즘 날 위해 무엇을 해 주니?',  },
				{ answerText: '너는 요즘 너에 위해 무엇을 해 주니?',  },
				{ answerText: '너는 요즘 널 위해 무엇을 해 줬니?',  },
				{ answerText: '너는 요즘 널 위해 무엇을 해 주니?', },
			],
      hintWords: [
				{ korean: '을/를 위해', japanese: '～のために' },
				{ korean: '아/어 주다', japanese: 'してあげる/くれる' },
			],
    },
    {
      language: '韓国語',
      questionText: '最善を尽くします。',
			answerOptions: [
				{ answerText: '최선을 다했습니다.',  },
				{ answerText: '최선을 다 하겠습니다.',  },
				{ answerText: '최선을 다하겠습니다.', },
				{ answerText: '최손을 다하겠습니다.',  },
			],
      hintWords: [
				{ korean: '을/를 위해', japanese: '-のため' },
				{ korean: '아/어 주다', japanese: 'してあげる、してくれる' },
			],
    },
    {
      language: '韓国語',
      questionText: '時間がもったいない。俺が好きなこと俺がしたいこと、今すぐやりながら生きるよ。',
			answerOptions: [
				{ answerText: '시간이 아까워. 내가 좋아하는 거, 내가 하고 싶은 거, 지금 바로 하면서 살래.',  },
				{ answerText: '시간이 아까워. 내가 좋아하는 거, 내가 하고 싶은 거, 지금 당장 하면서 살레.', },
				{ answerText: '시간이 아까워. 내가 좋아하는 거, 내가 하고 싶은 거, 지금 당장 하면서 살래.',  },
				{ answerText: '시간이 아깝어. 내가 좋아하는 거, 내가 하고 싶은 거, 지금 당장 하면서 살래.',  },
			],
      hintWords: [
				{ korean: '아깝다', japanese: '惜しい、もったいない' },
				{ korean: '바로', japanese: 'まさに' },
				{ korean: '당장', japanese: 'すぐに' },
				{ korean: 'ㄹ래', japanese: '-する（つもり）' },
			],
    },
    {
      language: '韓国語',
      questionText: '判断の瞬間が満ち潮みたいに押し寄せてきたら、その中の大きなのいくつかは俺に聞いてみな。',
			answerOptions: [
				{ answerText: '판단의 순간들이 밀물처럼 밀어오면, 그중 큰 거 몇 개는 나한테 물어 봐.',  },
				{ answerText: '판단의 순간들이 밀물처럼 밀리면, 그중 큰 거 몇 개는 나한테 물어 봐.',  },
				{ answerText: '판단의 순간들이 밀물처럼 밀려오면, 그중 큰 거 몇 개는 나한테 묻어 봐.',  },
				{ answerText: '판단의 순간들이 밀물처럼 밀려오면, 그중 큰 거 몇 개는 나한테 물어 봐.', },
			],
      hintWords: [
				{ korean: '밀물', japanese: '満ち潮' },
				{ korean: '밀어오다', japanese: '押し寄せる' },
				{ korean: '묻다', japanese: '聞く、尋ねる' },
			],
    },
    {
      language: '韓国語',
      questionText: '責任感を持って逃げずに最善を尽くした。今日よくやったよ。',
			answerOptions: [
				{ answerText: '책임감 있게 도망 안 가고 최선을 다했어. 오늘 너무 잘했어.',  },
				{ answerText: '책임감 있게  안 도망 가고 최선을 다했어. 오늘 너무 잘했어.', },
				{ answerText: '책임감 있게 도망 안 가고 최선을 다 했어. 오늘 너무 잘했어.',  },
				{ answerText: '첵임감 있게 도망 안 가고 최선을 다했어. 오늘 너무 잘했어.',  },
			],
      hintWords: [
				{ korean: '（漢字語）안 하다', japanese: '-しない' },
        { korean: '최선을 다하다', japanese: '最善を尽くす' },
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
            centerComponent={{ text: '賢い医師生活', style: { color: '#fff', fontSize:17 } }}
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