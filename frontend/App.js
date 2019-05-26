import React, {Component} from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {Button, Icon} from 'native-base'
import API from './src/utils/methods'
import Home from './src/pages/Home'
import ImagePicker from './src/pages/ImagePicker'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const bottomTabPages = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '主页',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image source={require('./src/assets/zhuye.png')} style={styles.icon}/> )
    }
  }, 
  ImagePicker: {
    screen: ImagePicker,
    navigationOptions: {
      tabBarLabel: '上传图片',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image source={require('./src/assets/wenjian.png')} style={styles.icon}/> )
    },
  }, 
}

const BottomTab = createBottomTabNavigator(
  bottomTabPages,
  {
    nitialRouteName: 'Home',
    tabBarPosition: 'bottom',
    lazy: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#8a81f9',
      inactiveTintColor: '#343131',
      showIcon: true
  }
  }
)


const StacksOverTabs = createStackNavigator({
  Root: {
    screen: BottomTab
  }
})

const StacksOverTab = createAppContainer(StacksOverTabs);

export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  

  componentDidMount() {
  }

  
  render() {
    return (
      <StacksOverTab ref='nav'/>
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
  icon: {
    width: API.reset(25),
    height: API.reset(25)
  }
});
