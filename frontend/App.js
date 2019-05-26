import React, {Component} from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import {Platform, StyleSheet, Text, View, Image, AsyncStorage} from 'react-native';
import {Button, Icon} from 'native-base'
import API from './src/utils/methods'
import Home from './src/pages/Home'
import Login from './src/pages/Login'
import SignUp from './src/pages/SignUp'
import HighScore from './src/pages/HighScore'
import Search from './src/pages/Search'
import Detail from './src/pages/Detail'
import Score from './src/pages/Score'
import Storage from "react-native-storage"
global.storage = new Storage({
  size: 1000, //最大容量
  storageBackend: AsyncStorage, //存储引擎
  defaultExpires: 1000 * 3600 * 24 * 30, //缓存时间
  // enableCache: true // 读写时在内存中缓存数据。默认启用。
});


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const HighScoreStack = createStackNavigator({
  HighScore: {
    screen: HighScore,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  }
});

const HomeStack = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  }

});

const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  }
});

const bottomTabPages = {
  HighScore: {
    screen: HighScoreStack,
    navigationOptions: {
      tabBarLabel: '高分',
      tabBarIcon: ({ tintColor, focused }) => (
          <Image source={require('./src/assets/huangguan.png')} style={styles.icon}/> )
    }
  },
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: '主页',
      tabBarIcon: ({ tintColor, focused }) => (
          <Image source={require('./src/assets/kecheng.png')} style={styles.centerIcon}/> ),

    },
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: '搜索',
      tabBarIcon: ({ tintColor, focused }) => (
          <Image source={require('./src/assets/sousuo.png')} style={styles.icon}/> )
    }
  }
}

const BottomTab = createBottomTabNavigator(
  bottomTabPages,
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    lazy: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#be8dbd',
      inactiveTintColor: '#bfbfbf',
      showIcon: true
  }
  }
)


const StacksOverTabs = createStackNavigator({
  
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },

  Root: {
    screen: BottomTab,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  
  Score: {
    screen: Score,
    navigationOptions: {
      header: null
    }
  },

  
})

const StacksOverTab = createAppContainer(StacksOverTabs);

export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  componentDidMount() {
    this.loadStorage();
  }

  async loadStorage() {
    let response = await storage.load({ key: 'username', id: '1' })
    response? 
      this.refs.nav._navigation.navigate('Root'): 
      this.refs.nav._navigation.navigate('Login')
  }
  
  render() {
    return (
      <StacksOverTab ref='nav'/>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: API.reset(25),
    height: API.reset(25)
  },
  centerIcon: {
    width: API.reset(44),
    height:API.reset(40),
    position: 'absolute',
    zIndex: 100,
    bottom: 2,
  }
});
