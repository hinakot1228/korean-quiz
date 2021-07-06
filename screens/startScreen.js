import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider,Card, ListItem, Header, Button, Icon, Text, PricingCard, Divider} from 'react-native-elements';

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
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}>
              <Text h3 style={{paddingBottom:10}}>ドラマの名言で覚える</Text>
            </View>
            <Divider orientation="horizontal" />
            <Text h1 style={{marginTop:10, marginBottom: 100}}>韓　国　語</Text>
            <Button
              title="始める  >>"
              onPress={() => {
                this.props.navigation.navigate('UnitSelection')
              }}
              buttonStyle={{width: 130, fontSize: 100}}
            />
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
