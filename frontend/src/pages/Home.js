import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button, TouchableOpacity} from 'react-native';
import SnapCarousel from '../components/SnapCarousel'
import DepartmentItem from '../components/DepartmentItem'
import API from '../utils/methods'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.recommandPrompt}>
                热门课程
            </Text>
            <View>
                <SnapCarousel nav={this.props.navigation}/>
            </View>
            
            <View style={{marginTop: 20}}>
                <View style={{flexDirection: 'row', width: API.width}}>
                    <Text style={styles.recommandPrompt}>
                        热门学院
                    </Text>
                    <TouchableOpacity style={{position: 'absolute', right:20}} onPress={()=>this.props.navigation.navigate('DepartList')}>
                        <Text style={{color: '#be8dbd', fontSize: 17, marginTop: 18}}>查看更多</Text>
                    </TouchableOpacity>
                </View>
                <DepartmentItem
                    iconUrl={require('../assets/jisuanji.png')}
                    nav={this.props.navigation}
                    departName={'软件学院'} />
        
                <DepartmentItem
                 iconUrl={require('../assets/tongji.png')}
                 nav={this.props.navigation}
                 departName={'数学系'}/>
                   
                <DepartmentItem
                iconUrl={require('../assets/banhui.png')}
                nav={this.props.navigation}
                departName={'社会学院'}/>

                <DepartmentItem
                     iconUrl={require('../assets/wuli-2.png')}
                     nav={this.props.navigation}
                     departName={'物理学院'}/>
                   
                <DepartmentItem
                iconUrl={require('../assets/tianwenxue.png')}
                nav={this.props.navigation}
                departName={'天文与空间科学学院'}/>
                    
            </View>

            
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    recommandPrompt:{
        fontSize: 25,
        color: '#000',
        margin: 10,
    }
})