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
            courseInfo: {}
        }
    }

    componentDidMount() {
        let id = this.props.navigation.getParam('courseId');
        this.getCourseInfo(id);
    }

    async getCourseInfo(id) {
        try {
            let formData = new FormData();
            formData.append('courseId', id)
            let response = await API._fetch(API.f_post('/course/detail', formData));
            let responseJson = await response.json();

            this.setState({courseInfo: responseJson})
        }
        catch(error) {
            console.error(error);
        }
    }

    render() {
        let info = this.state.courseInfo;
        console.log(info);
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
                
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 30, color: '#e0620d'}}>{parseFloat(info.overallScore).toFixed(1)}</Text>
                       
                    </View>

                    <View style={{flexDirection: 'row', position: 'absolute', right: 60}}>
                        <View style={{alignItems: 'center', marginRight: 30}}>
                            <Text>教师得分</Text>
                            <Text>{parseFloat(info.teacherScore).toFixed(1)}</Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <Text>教学内容得分</Text>
                            <Text>{parseFloat(info.contentScore).toFixed(1)}</Text>
                        </View>
                    </View>
                </View>

                <View style={{marginTop: 30, borderLeftColor: '#e6e6e6', borderLeftWidth: 2, paddingLeft: 20, marginBottom: 5}}>
                    <Text style={styles.classInfo}>教师：{info.instructor}</Text>
                    <Text style={styles.classInfo}>院系：{info.department}</Text>
                    <Text style={styles.classInfo}>上课时间地点：{info.timeAndPlace}</Text>
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
                    data={info.comments}
                    renderItem={({item})=> 
                    <CommentItem 
                        username={item.username} 
                        comment={item.comment}
                    />}
                    keyExtractor={(item, index) => item.courseCommentId.toString()}
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
        fontSize: 25,
        color: '#000',
        marginBottom: 20,
        width: 250
    },
    remarkBtn: {
        color: '#efb336', 
        fontSize: 16,
        borderColor: '#efb336',
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    classInfo: {
        margin: 5
    }
})