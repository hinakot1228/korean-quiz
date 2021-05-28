import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from './screens/startScreen';
import UnitSelectionScreen from './screens/unitSelectionScreen';

const MainStack = createStackNavigator(
  {
    Start: StartScreen,
    UnitSelection: UnitSelectionScreen,
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

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>ドラマの名言で覚える</Text>
//       <Text>韓国語</Text>
//       <StatusBar style="auto" />
//       <TouchableOpacity
//         onPress={() => alert('Hello, world!')}
//         style={{ backgroundColor: 'black' }}>
//         <Text style={{ fontSize: 20, color: '#fff' }}>始める</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
