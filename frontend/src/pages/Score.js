import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button, TouchableOpacity,
    Image, TextInput, Alert} from 'react-native';
import API from '../utils/methods';
import {Card, CardItem, Body, Textarea} from 'native-base'
import StarRating from '../components/StarRating'

export default class Score extends Component{
    constructor(props) {
        super(props);
        this.state = {
            overallScore: 0,
            teacherScore: 0,
            contentScore: 0,
            comment: '',
            username: ''
        }
    }

    componentDidMount(): void {
        storage.load({
            key: 'username',
            id: '1'
        }).then(ret => {
            this.setState({
                username: ret
            });


        })

    }

    onOverallPress(value) {
        this.setState({overallScore: value});
    }
    onTeacherPress(value) {
        this.setState({teacherScore: value});
    }
    onContentPress(value) {
        this.setState({contentScore: value});
    }

    async submit(id) {
        try {
            let formData = new FormData();
            formData.append('courseId', id);
            formData.append('username', username);
            formData.append('comment', this.state.comment);
            formData.append('overallScore', this.state.overallScore);
            formData.append('teacherScore', this.state.teacherScore);
            formData.append('contentScore', this.state.contentScore);
            formData.append('date', new Date());

            let response = await API._fetch(API.f_post('/comment/upload', formData));
            let data = await response.json();
            Alert(JSON.stringify(data));
        }
        catch(error) {
            console.log(error);
        }
    }

    render() {
        let info = this.props.navigation.state.params.courseInfo;
        console.log(info);
        return <ScrollView style={styles.container}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                 <Image source={require('../assets/bj-icon-fh.png')} style={styles.backIcon}></Image>
            </TouchableOpacity>

            <Card style={{height: API.height*3/4, padding: 20, alignItems: 'center', marginBottom: 30}}>
               <View style={{height: API.height*8/16}}>
               <Text style={styles.courseName}>{info.courseName}</Text>
                <Text>{info.department}、{info.instructor}</Text>

                <View style={{width: 300, alignItems: 'center', marginTop: 40}}>
                    <Text style={{color: '#be8dbd'}}>课程总体评分</Text>
                    <StarRating
                        maxStars={5}
                        disabled={false}
                        starSize={50}
                        onStarChange={(value) => this.onOverallPress(value)}
                    />
                </View>

                <View style={{width: 300, alignItems: 'center', marginTop: 40}}>
                    <Text style={{color: '#be8dbd'}}>教师评分</Text>
                    <StarRating
                        maxStars={5}
                        disabled={false}
                        starSize={30}
                        onStarChange={(value) => this.onTeacherPress(value)}
                    />
                </View>
                <View style={{width: 300, alignItems: 'center', marginTop: 20}}>
                    <Text style={{color: '#be8dbd'}}>内容评分</Text>
                    <StarRating
                        maxStars={5}
                        disabled={false}
                        starSize={30}
                        onStarChange={(value) => this.onContentPress(value)}
                    />
                </View>
               </View>

               <Textarea
                        rowSpan={5} 
                        bordered 
                        placeholder="请输入你对课程的评价～您的评论将会展示在课程详情中" 
                        onChangeText={(comment) => {

                        this.setState({ comment })

                        }}
                        value={this.state.comment}
                        style={styles.inputBox}
                    />
                    
            </Card>
            <Button title={'完成评价'} color={'#be8dbd'} onPress={() => this.submit(info.courseId)}/>
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        width: API.width,
        height: API.height,
        paddingLeft: 20,
        paddingRight: 20,
    },
    backIcon: {
        width: 20,
        height: 20,
        marginTop: 20,
        marginBottom: 20
    },
    img: {
        width: API.reset(60),
        height: API.reset(60),
        borderRadius: API.reset(35),
    },
    courseName: {
        fontSize: 28,
        color: '#000',
        marginTop: 5,
        marginBottom: 5
    },
    inputBox: {
        paddingLeft: 10,
        paddingRight: 10, 
        height: API.height*3/16,
        borderRadius: 5,
        width: API.width-100,
    }
})