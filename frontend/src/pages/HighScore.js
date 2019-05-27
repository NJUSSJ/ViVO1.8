import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, FlatList, 
    Alert, ScrollView, DeviceEventEmitter} from 'react-native';
import API from '../utils/methods'
import CourseItem from '../components/CourseItem'
export default class HighScore extends Component {

    constructor(){
        super();
        this.state = {
            data: []
        };
        this.getHighScore = this.getHighScore.bind(this);
    }

    componentDidMount() {
        let _this = this;
        DeviceEventEmitter.addListener('score',(event)=>{
            _this.getHighScore();
        })
        this.getHighScore();
    }

    render() {
        return (
            <ScrollView style={styles.container}>
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
                        data={this.state.data}
                        keyExtractor={(item, index) => item.courseId.toString()}
                        renderItem={({item}) => <TouchableOpacity onPress={() => {this.props.navigation.navigate('Detail', {courseId: item.courseId})}}>
                            <CourseItem picUrl={item.picUrl} courseName={item.courseName} department={item.department}
                                        teacher={item.instructor} overallScore={item.overallScore}/>
                        </TouchableOpacity>}/>
                </View>

            </ScrollView>
        );
    }

    async getHighScore() {
        try {
            let formData = new FormData();
            formData.append('keyword', 'keyword');
            let response = await API._fetch(API.f_post('/course/highScore', formData));
            let data = await response.json();
            this.setState({
                data: data
            });
        } catch (e) {
            console.log(e);
        }

    }
}

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