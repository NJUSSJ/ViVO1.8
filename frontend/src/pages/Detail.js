import React, {Component} from 'react';
import {Platform, StyleSheet,  View, ScrollView, Text, Button,
    TouchableOpacity, Image, ImageBackground, FlatList} from 'react-native';
import API from '../utils/methods';
import StarRating from '../components/StarRating';
import {Card, CardItem, Body} from 'native-base';
import CommentItem from '../components/CommentItem';

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
                classTime: '周一 周三 5-6节',
                picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558870633991&di=4ce8574d972552b602f59c8121a3073a&imgtype=0&src=http%3A%2F%2Ftu.openossfile.com%3A9186%2Fgroup1%2FM00%2F45%2F61%2FrBgIBlzOT8fJxRFnAACPJGomnIM780.jpg',
                commonList: [
                    {
                        courseCommentId: '1',
                        username: '刘昊然',
                        comment: '这门课好棒啊～～～',
                    },
                    {
                        courseCommentId: '2',
                        username: '杨郁芩',
                        comment: '作业有点难，不过老师讲得很好啦',
                    },
                ]
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
        let info = this.state.courseInfo;
        return <ScrollView>
            <ImageBackground source={{uri: info.picUrl}} style={styles.headerImg}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                 <Image source={require('../assets/bj-icon-fh.png')} style={styles.backIcon}></Image>
            </TouchableOpacity>
            </ImageBackground>

           <View style={{padding: 20}}>
            <View style={{flexDirection: 'row', width: API.width}}>
                    <Text style={styles.courseName}>{info.courseName}</Text>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Score', {courseInfo: info})}
                    style={{position: 'absolute', right: 40}}>
                        <Text style={styles.remarkBtn} >去评价</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', width: API.width}}>
                    <Text style={{fontSize: 30, color: '#e0620d'}}>{info.overallScore}</Text>
                    <View style={{marginTop: 10, marginLeft: 5}}>
                        <StarRating
                            maxStars={5}
                            rating={info.overallScore}
                            disabled={true}
                            starSize={18}
                        />
                    </View>

                    <View style={{flexDirection: 'row', position: 'absolute', right: 60}}>
                        <View style={{alignItems: 'center', marginRight: 30}}>
                            <Text>教师得分</Text>
                            <Text>{info.teacherScore}</Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <Text>教学内容得分</Text>
                            <Text>{info.contentScore}</Text>
                        </View>
                    </View>
                </View>

                <View style={{marginTop: 30, borderLeftColor: '#e6e6e6', borderLeftWidth: 2, paddingLeft: 20}}>
                    <Text style={styles.classInfo}>教师：{info.instructor}</Text>
                    <Text style={styles.classInfo}>院系：{info.department}</Text>
                    <Text style={styles.classInfo}>上课时间：{info.classTime}</Text>
                    <Text style={styles.classInfo}>上课地点：{info.classroom}</Text>
                </View>

                <Card style={{marginTop: 20}}>
                    <CardItem>
                        <Body>
                            <Text>
                            {info.description}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>

                <Text style={{marginTop: 10,borderLeftColor: '#e6e6e6', borderLeftWidth: 2, paddingLeft: 20, marginBottom: 10}}>用户评论</Text>
                <FlatList
                    data={info.commonList}
                    renderItem={({item})=> 
                    <CommentItem 
                        username={item.username} 
                        comment={item.comment}
                    />}
                    keyExtractor={(item, index) => item.courseCommentId}
                    />
           </View>
           
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    headerImg : {
        width: API.width,
        height: 150
    },
    backIcon: {
        width: 20,
        height: 20,
        margin: 20,
        zIndex: 100
    },
    courseName: {
        fontSize: 30,
        color: '#000',
        marginBottom: 20
    },
    remarkBtn: {
        color: '#efb336', 
        fontSize: 16,
        borderColor: '#efb336',
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    classInfo: {
        margin: 3
    }
})