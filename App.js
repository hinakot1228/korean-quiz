import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from './screens/startScreen';
import UnitSelectionScreen from './screens/unitSelectionScreen';
import QuestionScreen from './screens/questionScreen';
import CorrectAnswerScreen from './screens/correctAnswerScreen';
import IncorrectAnswerScreen from './screens/incorrectAnswerScreen';
import ScoreScreen from './screens/scoreScreen';

const MainStack = createStackNavigator(
  {
    Start: StartScreen,
    UnitSelection: UnitSelectionScreen,
    Question: QuestionScreen,
    CorrectAnswer: CorrectAnswerScreen,
    IncorrectAnswer: IncorrectAnswerScreen,
    Score: ScoreScreen,
  }
)

const AppContainer = createAppContainer(MainStack)

export default class App extends Component {

  render() {
    return (
      <AppContainer />
    )
  }
}