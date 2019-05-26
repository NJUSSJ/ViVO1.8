import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import SnapCarousel from '../components/SnapCarousel'
import DepartmentItem from '../components/DepartmentItem'

export default class Home extends Component {
    render(){
        return <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.recommandPrompt}>
                热门课程
            </Text>
            <View>
                <SnapCarousel/>
            </View>
            
            <View style={{marginTop: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.recommandPrompt}>
                        热门学院
                    </Text>
                    {/* <Button title={'查看更多'}></Button> */}
                </View>
                <DepartmentItem
                    iconUrl={require('../assets/jisuanji.png')}
                    departName={'软件学院'} />
        
                <DepartmentItem
                 iconUrl={require('../assets/tianwenxue.png')}
                 departName={'天文与空间学院'}/>
                   
                <DepartmentItem
                iconUrl={require('../assets/yuwen.png')}
                departName={'文学院'}/>

                <DepartmentItem
                     iconUrl={require('../assets/wuli.png')}
                     departName={'物理学院'}/>
                   
                <DepartmentItem
                iconUrl={require('../assets/dianzijishu.png')}
                departName={'电子科学与工程学院'}/>
                    
            </View>

            
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    recommandPrompt:{
        fontSize: 28,
        color: '#000',
        margin: 10,
    }
})