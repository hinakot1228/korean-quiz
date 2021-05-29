import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Header, Button } from 'react-native-elements';

export default class UnitSelectionScreen extends Component {
    render() {
      return (
        <>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <Button 
            title="2021年"
            onPress={() => {
              this.props.navigation.navigate('Question')
            }}
           />
          <Button 
            title="2020年" 
            onPress={() => {
              this.props.navigation.navigate('Question')
            }}
          />
        </>
      );



      // return (
      //   <View style={styles.container}>
      //     <Button
      //       title="←"
			// style={{ fontSize: 20, color: 'black' }}
      //       onPress={() => {
      //         this.props.navigation.navigate('Page1Detail')
      //       }}
      //     />
      //     <Text>ドラマの名言で覚える韓国語</Text>

      //     <Text style={styles.instructions}>
      //       どの年のドラマにしますか？
      //     </Text>

      //     <Button
      //       title="2020年"
			// style={{ fontSize: 20, color: 'black' }}
      //     />

      //     <Button
      //       title="始める"
			// 			style={{ backgroundColor: 'black', fontSize: 20, color: '#fff' }}
      //       onPress={() => {
      //         this.props.navigation.navigate('UnitSelection')
      //       }}
      //     />
      //   </View>
      // )
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
