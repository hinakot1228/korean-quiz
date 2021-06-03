import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider,Header, Button, Icon } from 'react-native-elements';

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
              this.props.navigation.navigate('Question')
            }}
           />
          <Button 
            title="愛の不時着"
            onPress={() => {
              this.props.navigation.navigate('CrashLandingOnYouQuestion')
            }}
           />
          <Button 
            title="スタートアップ"
            onPress={() => {
              this.props.navigation.navigate('StartUpQuestion')
            }}
           />
          <Button 
            title="賢い医師生活"
            onPress={() => {
              this.props.navigation.navigate('HospitalPlaylistQuestion')
            }}
           />
          <Button 
            title="椿の花咲く頃"
            onPress={() => {
              this.props.navigation.navigate('WhenTheCamelliaBloomsQuestion')
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
