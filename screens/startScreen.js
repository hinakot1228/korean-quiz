import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider,Card, ListItem, Header, Button, Icon, Text, PricingCard, Divider, Image} from 'react-native-elements';

const theme = {
  Button: {
    containerStyle: {
      margin: 10,
    },
    raised: true,
  },
  colors: {
    primary: '#ffb6c1',
  },
};

export default class startScreen extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <View style={styles.container}>
            <View style={{flex: 1, width: '100%'}}>
              <Header
                containerStyle={{ width: '100%' ,height: '100%', backgroundColor: '#ffb6c1',}}
                centerComponent={{ text: 'ドラマのなかの韓国語', style: { color: '#fff', fontSize:17 } }}
              />
            </View>
            <View style={{flex: 7, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{
                  width: 150,
                  height: 150
                }}
                source={require('../assets/icon.png')}
              />
            </View>
            <View style={{flex: 3, alignItems: 'center'}}>
              <Button
                title="はじめる >>"
                onPress={() => {
                  this.props.navigation.navigate('UnitSelection')
                }}
                containerStyle={{width: '100%'}}
              />
            </View>
          </View>
        </ThemeProvider>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
