import React, { Component } from 'react';
import { render } from 'react-dom';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text} from 'react-native-elements';
// import {
//   MatchingQuestion,
//   MultipleChoiceQuestion,
//   QuizContainer,
//   WritingQuestion,
// } from 'react-native-quiz-maker';

export default class QuestionScreen extends Component {
  render() {
    return (
      <View>
        <ThemeProvider theme={theme}>
          <Header
            containerStyle={{ position: 'absolute', top: 0 }}
            // leftComponent={{ 
            //   icon: 'chevron-left', 
            //   color: '#fff',
            //   onPress: () => {
            //     this.props.navigation.navigate('UnitSelection')
            //   },
            // }}
            centerComponent={{ text: 'ドラマの名言で覚える韓国語', style: { color: '#fff' } }}
            rightComponent={{ 
              icon: 'home', 
              color: '#fff',
              onPress: () => {
                this.props.navigation.navigate('Start')
              },
            }}
          />
          <Card containerStyle={{top: '15%', height:'50%'}}>
            <Card.Title>Q.1</Card.Title>
            <Card.Divider/>
            <Text h5>以下のセリフを{this.props.language}にしてみよう。</Text>
            <Text h4>問題：{this.props.questionSentence}</Text>
          </Card>
          <View style={{top: '20%' }} >
            <Button
              title="答え"
            />
            <Button
              title={this.props.anwserSentence}
              // onClick={}
            />
            <Button
              title={this.props.anwserSentence}
            />
            <Button
              title={this.props.anwserSentence}
            />
          </View>
        </ThemeProvider>
      </View>
    );
  }
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