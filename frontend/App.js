/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'native-base'
import API from './src/utils/methods'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      response: ''
    }
  }
  

  componentDidMount() {
   this.getResponse();
  }

  async getResponse() {
    try {
      let formData = new FormData();
      let response = await API._fetch(API.get({url: '/sample'}));
      let responseJson = await response.json();
      console.error(responseJson)
      this.setState({response: responseJson})
    }
    catch(error) {
      console.error('异常:', error)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text>一米八高个儿团！！！</Text>
        <Button iconLeft style={{alignSelf: 'center'}}>
            <Icon name='home' />
            <Text style={{color: '#fff'}}>这是React-Native-Base的按钮组件</Text>
        </Button>
        <Text>尝试调用服务器方法Reponse: {this.state.response}</Text>
        <Button rounded success style={{alignSelf: 'center'}}>
          <Text>尝试调用服务器方法Reponse: {this.state.response}</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
