import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Image } from 'react-native';
import { ThemeProvider, Card, ListItem, Header, Button, Icon, Text, PricingCard, Divider} from 'react-native-elements';
import {
  MatchingQuestion,
  MultipleChoiceQuestion,
  QuizContainer,
  WritingQuestion,
} from 'react-native-quiz-maker';

const theme = {
  Button: {
    containerStyle: {
      margin: 10,
    },
    raised: true,
  },
  colors: {
    primary: '#9fc0d1',
  },
};

export default class QuestionScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ThemeProvider theme={theme}>
          <Header
              leftComponent={{ 
                icon: 'chevron-left', 
                color: '#fff',
                onPress: () => {
                  this.props.navigation.navigate('UnitSelection')
                },
              }}
              centerComponent={{ text: 'ドラマの名言で覚える韓国語', style: { color: '#fff' } }}
              rightComponent={{ 
                icon: 'home', 
                color: '#fff',
                onPress: () => {
                  this.props.navigation.navigate('Start')
                },
              }}
          />
        </ThemeProvider>
        <QuizContainer
        questions={[
          {
            questionType: 'MultipleChoice',
            question: '間違って乗った汽車が時には目的地に連れていってくれると。',
            answer: '잘못 탄 기차가 때론 목적지에 데려다 준다고.',
            allChoices: ['안돼서 탄 기차가 때론 목적지에 데려다 준다고.', 
                         '잘못 탄 기차가 때론 목적지에 데리고 준다고.', 
                         '잘못 탄 기차가 따론 목적지에 데려다 준다고.', 
                         '잘못 탄 기차가 때론 목적지에 데려다 준다.'],
            instructionText: '以下のセリフを韓国語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: 'アフリカも行って、南極も行くのにあなたはよりによってここに住んでいるのですね。もう会えないでしょう。',
            answer: '아프리카도 가고, 남극도 가는데 당신은 참 하필 여기 사네요. 다신 못 보겠죠.',
            allChoices: ['아프리카도 가고, 남국도 가는데 당신은 참 하필 여기 사네요. 다신 못 보겠죠.', 
                         '아프리카도 가고, 남극도 가는데 당신은 참 하빌 여기 사네요. 다신 못 보겠죠.', 
                         '아프리카도 가고, 남극도 가는데 당신은 참 하필 여기 사네요. 다신 안 보겠죠.', 
                         '아프리카도 가고, 남극도 가는데 당신은 참 하필 여기 사네요. 다신 못 보겠죠.'],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: '바람이 왜 부는 거 같아요? 지나가려고 부는 거예요. 머물려고 부는 게 아니고.',
            answer: '風はなぜ吹くと思いますか？　過ぎようと吹くんです。留まろうと吹くんじゃなくて。',
            allChoices: ['風はなぜ吹くと思いますか？　過ぎようと吹くんです。留まろうと吹くんじゃなくて。', 
                         '風はなぜ歌うと思いますか？　過ぎようと歌うんです。留まろうと歌うんじゃなくて。', 
                         '風はなぜ吹くと思いますか？　過ぎて吹くんです。留まって吹くんじゃなくて。', 
                         '願いはなぜ吹くと思いますか？　過ぎようと吹くんです。留まろうと吹くんじゃなくて。'],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: '내가 슬프면 그도 슬플가봐 난 최선을 다해서 웃고 감사하고 행복하려고 노력했다.',
            answer: '私が悲しかったら彼も悲しむようで、私は最善を全部して笑って感謝して幸せになろうと努力した。',
            allChoices: ['私が悲しかったら彼も悲しむようで、私は最善を尽くして笑って感謝して幸せになろうと努力した。', 
                         '私が悲しかったら彼も悲しんて行くみたいようで、私は最善を尽くして笑って感謝して幸せになろうと努力した。', 
                         '私が悲しかったらそれも悲しむようで、私は最善を尽くして笑って感謝して幸せになろうと努力した。', 
                         '私が悲しかったら彼も悲しむようで、私は最善を尽くして笑って感謝して幸せになろうと努力した。'],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: 'いくら遠くに行っても最後は帰ってくるんだ。',
            answer: '아무리 먼 길을 떠나도 결국 돌아오는 거야.',
            allChoices: ['얼마 먼 길을 떠나도 결국 돌아오는 거야.', 
                         '아무리 먼 길을 떠나도 결국 돌아가는 거야.', 
                         '아무리 먼 길을 떠나도 결국 돌아오는 거야.', 
                         '아무리 머는 길을 떠나도 결국 돌아오는 거야.'],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: '人生で決して忘れてはいけない人は憎い人じゃなく好きな人だ。',
            answer: '인생에서 절대 잊어버리지 말아야 할 사람은 미운 사람이 아니고 좋은 사람이요.',
            allChoices: ['인생에서 절대 잊어버리지 말아야 할 사람은 미운 사람이 아니고 좋은 사람이요.', 
                         '인생에서 절대 잊어버리지 말아야 할 사람은 밉은 사람이 아니고 좋은 사람이요.', 
                         '인생에서 절대 잊어버리지 마라야 할 사람은 미운 사람이 아니고 좋은 사람이요.', 
                         '인생에서 절대 잊어버려야 할 사람은 미운 사람이 아니고 좋은 사람이요.'],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: 'あなたが日常の中で探すことができて探さなければならない小さな幸せを逃さないでくれたら嬉しい。',
            answer: '당신이 일상 속에서 찾을 수 있고 찾아야 할 작은 행복들을 놓치지 말아줬으면 해요.',
            allChoices: ['당신이 일상 속에서 찾을 수 있고 찾아야 할 작은 행복들을 놓치지 말아줬으면 해요.', 
                         '당신이 일상 안에서 찾을 수 있고 찾아야 할 작은 행복들을 놓치지 말아줬으면 해요.', 
                         '당신이 일상 속에서 찾은 수 있고 찾아야 할 적은 행복들을 놓치지 말아줬으면 해요.', 
                         '당신이 일상 속에서 찾을 수 있고 찾아야 할 작은 행복들을 도망가지 말아줬으면 해요.'],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          
        ]}
        onSubmit={(isCorrect: boolean) => console.log(isCorrect)}
        onComplete={(progress: number) => console.log('score: ', progress)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
