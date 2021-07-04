import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider,Header, Button, Icon } from 'react-native-elements';

const theme = {
  Button: {
    containerStyle: {
      margin: 30,
    },
    raised: true,
  },
  colors: {
    primary: '#9fc0d1',
  },
};

export default class UnitSelectionScreen extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <Header
            leftComponent={{ 
              icon: 'chevron-left', 
              color: '#fff',
              onPress: () => {
                this.props.navigation.navigate('Start')
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
          <Button 
            title="梨泰院クラス"
            onPress={() => {
              this.props.navigation.navigate('ItaewonClass')
            }}
           />
          <Button 
            title="愛の不時着"
            onPress={() => {
              this.props.navigation.navigate('CrashLandingOnYou')
            }}
           />
          <Button 
            title="スタートアップ"
            onPress={() => {
              this.props.navigation.navigate('StartUp')
            }}
           />
          <Button 
            title="賢い医師生活"
            onPress={() => {
              this.props.navigation.navigate('HospitalPlaylist')
            }}
           />
          <Button 
            title="椿の花咲く頃"
            onPress={() => {
              this.props.navigation.navigate('WhenTheCamelliaBlooms')
            }}
           />
        </ThemeProvider>
      );
    }
  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
