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
    primary: '#9fc0d1',
  },
};

export default class startScreen extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <View style={styles.container}>
            <Text h4>ドラマの名言で覚える</Text>
            <Text h4>韓国語</Text>
            <Button
              title="始める"
              onPress={() => {
                this.props.navigation.navigate('UnitSelection')
              }}
          />
          </View>
        </ThemeProvider>
      )
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
