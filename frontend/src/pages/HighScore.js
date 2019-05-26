import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Alert} from 'react-native';
import API from '../utils/methods'
import CourseItem from '../components/CourseItem'
export default class HighScore extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{
                        fontSize: 30,
                        marginLeft: 10,
                        marginTop: 10,
                        borderColor: 'grey',
                        color: 'black'
                    }}>高分课程</Text>
                    <Text style={{marginTop: 26, marginLeft: 10}}>(每周二6:00更新)</Text>
                </View>
                <View style={styles.list}>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => item.courseId}
                        renderItem={({item}) => <TouchableOpacity onPress={() => {this.props.navigation.navigate('Detail', {courseId: item.courseId})}}>
                            <CourseItem picUrl={item.picUrl} courseName={item.courseName} department={item.department}
                                        teacher={item.teacher} overallScore={item.overallScore}/>
                        </TouchableOpacity>}/>
                </View>

            </View>
        );
    }
}

const data = [
    {
        courseId: '1',
        picUrl: require("../assets/dianzijishu.png"),
        courseName: "C++程序设计",
        department: '软件学院',
        teacher: '郑滔',
        overallScore: '4.5'
    },
    {
        courseId: '2',
        picUrl: require("../assets/jisuanji.png"),
        courseName: "数据库开发技术",
        department: '软件学院',
        teacher: '刘嘉',
        overallScore: '2'
    },
    {
        courseId: '3',
        picUrl: require("../assets/jisuanji.png"),
        courseName: "数据库开发技术",
        department: '软件学院',
        teacher: '刘嘉',
        overallScore: '2'
    }
];

const styles = StyleSheet.create({
    container: {
        width: API.width
    },

    title: {
        flexDirection: 'row'
    },

    list: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderColor: 'grey',
        borderTopWidth: 1
    }
});