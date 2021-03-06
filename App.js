import React, { Component } from 'react';
import { createAppContainer, NavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from './screens/startScreen';
import UnitSelectionScreen from './screens/UnitSelectionScreen';
// import QuestionScreen from './screens/questionScreen';
import ScoreScreen from './screens/scoreScreen';
import ItaewonClassScreen from './screens/quizs/ItaewonClassScreen';
import CrashLandingOnYouScreen from './screens/quizs/CrashLandingOnYouScreen';
import HospitalPlaylistScreen from './screens/quizs/HospitalPlaylistScreen';
import StartUpScreen from './screens/quizs/StartUpScreen';
import WhenTheCamelliaBloomsScreen from './screens/quizs/WhenTheCamelliaBloomsScreen';



const MainStack = createStackNavigator(
  {
    Start: StartScreen,
    UnitSelection: UnitSelectionScreen,
    // Question: QuestionScreen,
    Score: ScoreScreen,
    ItaewonClass: ItaewonClassScreen,
    CrashLandingOnYou: CrashLandingOnYouScreen,
    HospitalPlaylist: HospitalPlaylistScreen,
    StartUp: StartUpScreen,
    WhenTheCamelliaBlooms: WhenTheCamelliaBloomsScreen,
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
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