import React, { Component } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, Header, Button, Text, Overlay } from 'react-native-elements';

function HeaderComponent(props) {
    return (
        <Header
          containerStyle={{ position: 'absolute', top: 0, width: '100%' }}
          centerComponent={{ text: '', style: { color: '#fff', fontSize:17 } }}
          rightComponent={{ 
            icon: 'home', 
            color: '#fff',
            onPress: () => navigation.navigate('Start')
          }}
        />
      );
    }
  
  export default HeaderComponent;
  