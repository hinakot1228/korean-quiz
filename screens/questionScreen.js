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
            question: '俺の価値をお前が決めるな。',
            answer: '내 가치를 네가 정하지 마.',
            allChoices: ['네 가치를 내가 정하지 마.', 
                         '내 가치를 네가 정하지 마.', 
                         '내 같이를 네가 정하지 마.', 
                         '내 가치를 네가 정해라.'],
            instructionText: '以下のセリフを韓国語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: '子どもは親の背中を見て大きくなるんだってね',
            answer: '아이는 부모의 등짝을 보고 큰다면서요.',
            allChoices: ['사랑은 부모의 배를 보고 큰다면서요.', 
                         '아이는 부모의 등짝을 보고 크는다면서요.', 
                         '아이는 부모의 등짝을 보고 큰다면서요.', 
                         '아이는 부모의 등작을 보고 큰다면서요.'],
            instructionText: '以下のセリフを韓国語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: '살아만 있다면 뭐든 별게 아니야.',
            answer: '生きてさえいれば何だってたいしたことない',
            allChoices: ['生きてさえいれば何だってたいしたことない', 
                         '愛してさえいれば何だってたいしたことない', 
                         '生きてさえいれば何だって星ではない', 
                         '生きていれば何だってたいしたことない'],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: '望んだとおりに全てを手に入れる。それがまさに僕の夢だから',
            answer: '원하는 대로 다 가질 거야. 그게 바로 내 꿈일 테니까',
            allChoices: ['원하는 만큼 다 가질 거야. 그게 바로 내 꿈일 테니까', 
                         '원하는 대로 다 가질 거야. 그게 바로 내 꼼일 테니까', 
                         '원하는 대로 다 가질 거야. 그게 바로 내 꿈일 테니까', 
                         '원하는 대로 다 가지을 거야. 그게 바로 내 꿈이을 테니까'],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: '제가 생각하는 강함은 사람에게서 나옵니다. 그 사람들의 신뢰가 저를 단단하게 해줍니다.',
            answer: '僕は考える強さは人から出てきます。その人たちの信頼が僕を強くしてくれます。',
            allChoices: ['僕は考える経験は人から出てきます。その人たちの信頼が僕を強くしてくれます。', 
                         '僕は考える強い人から出てきます。その人たちの信頼が僕を強くしてくれます。', 
                         '僕は考える強さは人から出てきます。その人たちの信頼が僕を確実にしてくれます。', 
                         '僕は考える強さは人から出てきます。その人たちの信頼が僕を強くしてくれます。'],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: '깊은 어둠에 가둬봐라 나는 홀로 빛나는 돌덩이',
            answer: '深い闇に閉じこめておけ 私は一人で輝く石ころ',
            allChoices: ['甲は闇に閉じこめておけ 私は一人で輝く石ころ', 
                         '深い闇に閉じこめておけ 私は一人で借金が出る石ころ', 
                         '深い闇に行け 私は一人で輝く石ころ', 
                         '深い闇に閉じこめておけ 私は一人で輝く石ころ'],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: '',
            answer: '',
            allChoices: ['', 
                         '', 
                         '', 
                         ''],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: '',
            answer: '',
            allChoices: ['', 
                         '', 
                         '', 
                         ''],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: '',
            answer: '',
            allChoices: ['', 
                         '', 
                         '', 
                         ''],
            instructionText: '以下のセリフを日本語にしてみよう。',
          },
          {
            questionType: 'MultipleChoice',
            question: '',
            answer: '',
            allChoices: ['', 
                         '', 
                         '', 
                         ''],
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
