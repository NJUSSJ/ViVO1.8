import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import API from '../utils/methods';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            courseInfo: {
                courseName: 'C++程序设计',
                department: '软件学院',
                instructor: '郑滔 潘敏学',
                description: '针对C++语言中的继承、多态、封装进行讲解……',
                overallScore: '4.8',
                teacherScore: '4.9',
                contentScore: '4,7',
                classroom: '教202',
                classTime: '周一 周三 5-6节'
            }
        }
    }

    componentDidMount() {
    //    this.getCourseInfo(id);
    }

    async getCourseInfo(id) {
        try {
            let formData = new FormData();
            formData.append('courseId', id)
            let response = await API._fetch(API.f_post('/detail', formData));
            let responseJson = await response.json();

            this.setState({courseInfo: responseJson})
        }
        catch(error) {
            console.error(error);
        }
    }

    render() {
        return <ScrollView>
            <TouchableOpacity>
                <Image></Image>
            </TouchableOpacity>
        </ScrollView>
    }
}

const styles = StyleSheet.create({

})