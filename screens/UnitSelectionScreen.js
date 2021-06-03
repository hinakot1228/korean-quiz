import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements';

export default class UnitSelectionScreen extends Component {
    render() {
      return (
        <>
          <Header
            leftComponent={{ icon: 'chevron-left', color: '#fff' }}
            centerComponent={{ text: 'ドラマの名言で覚える韓国語', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <Button 
            title="梨泰院クラス"
            onPress={() => {
              this.props.navigation.navigate('ItaewonClassQuestion')
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
        </>
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
