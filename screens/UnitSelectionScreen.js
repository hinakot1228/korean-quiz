import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider,Header, Button, Icon } from 'react-native-elements';
import { HeaderHeightContext } from 'react-navigation-stack';

const theme = {
  Button: {
    containerStyle: {
      margin: '6%',
    },
    titleStyle: {
      fontSize: 23
    },
    raised: true,
  },
  colors: {
    primary: '#ffb6c1',
  },
};

export default class UnitSelectionScreen extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <View  style={{ backgroundColor: '#FFFFFF', height: '100%'}}>
          <Header
            leftComponent={{ 
              icon: 'chevron-left', 
              color: '#fff',
              onPress: () => {
                this.props.navigation.navigate('Start')
              },
             }}
            centerComponent={{ text: 'ドラマのなかの韓国語', style: { color: '#fff', fontSize:17 } }}
            rightComponent={{ 
              icon: 'home', 
              color: '#fff',
              onPress: () => {
                this.props.navigation.navigate('Start')
              },
            }}
          />
          <View style={{flex: 1, justifyContent: 'center'}}>
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
           </View>
           </View>
        </ThemeProvider>
      );
    }
  }


