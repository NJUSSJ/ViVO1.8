import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, Image} from 'react-native';
import DepartmentItem from '../components/DepartmentItem'
import API from '../utils/methods'

export default class DepartList extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{flexDirection: 'row', width: API.width}}>
                <Text style={styles.recommandPrompt}>
                    所有学院
                </Text>

                 <TouchableOpacity 
                 onPress={()=>this.props.navigation.goBack()}
                    style={{position: 'absolute', right: 10, top: 10}}
                 >
                    <Image source={require('../assets/fb-sc.png')} style={styles.backIcon}></Image>
                 </TouchableOpacity></View>

                <DepartmentItem
                    iconUrl={require('../assets/jisuanji.png')}
                    nav={this.props.navigation}
                    departName={'软件学院'} />

                <DepartmentItem
                    iconUrl={require('../assets/jisuanji.png')}
                    nav={this.props.navigation}
                    departName={'计算机科学与技术系'} />

                 <DepartmentItem
                    iconUrl={require('../assets/jingji.png')}
                    nav={this.props.navigation}
                    departName={'商学院'} />

                 <DepartmentItem
                     iconUrl={require('../assets/dili.png')}
                     nav={this.props.navigation}
                     departName={'地球科学与工程学院'}/>

                <DepartmentItem
                     iconUrl={require('../assets/wuli-2.png')}
                     nav={this.props.navigation}
                     departName={'物理学院'}/>

                <DepartmentItem
                     iconUrl={require('../assets/shengwu.png')}
                     nav={this.props.navigation}
                     departName={'生命科学院'}/>

                <DepartmentItem
                     iconUrl={require('../assets/gongchenghuitu.png')}
                     nav={this.props.navigation}
                     departName={'现代工程与应用科学学院'}/>
                   
                <DepartmentItem
                    iconUrl={require('../assets/tianwenxue.png')}
                    nav={this.props.navigation}
                    departName={'天文与空间科学学院'}/>
        
                <DepartmentItem
                 iconUrl={require('../assets/tongji.png')}
                 nav={this.props.navigation}
                 departName={'数学系'}/>

                 <DepartmentItem
                 iconUrl={require('../assets/jianzhuke.png')}
                 nav={this.props.navigation}
                 departName={'建筑学院'}/>
                   
                <DepartmentItem
                iconUrl={require('../assets/banhui.png')}
                nav={this.props.navigation}
                departName={'社会学院'}/>

                <DepartmentItem
                iconUrl={require('../assets/yuwen.png')}
                nav={this.props.navigation}
                departName={'文学院'}/>

                <DepartmentItem
                iconUrl={require('../assets/yuwen.png')}
                nav={this.props.navigation}
                departName={'历史学院'}/>

                <DepartmentItem
                iconUrl={require('../assets/zhengzhi.png')}
                nav={this.props.navigation}
                departName={'政府管理学院'}/>

                <DepartmentItem
                iconUrl={require('../assets/meishu.png')}
                nav={this.props.navigation}
                departName={'艺术学院'}/>

                <DepartmentItem
                iconUrl={require('../assets/xiaoyuzhong.png')}
                nav={this.props.navigation}
                departName={'新闻传播学院'}/>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    
    recommandPrompt:{
        fontSize: 25,
        color: '#000',
        margin: 10,
    },
    backIcon: {
        width: API.reset(30),
        height: API.reset(30)
    },
})