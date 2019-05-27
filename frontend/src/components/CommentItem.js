import React, {Component} from 'react';
import {Platform, StyleSheet,  View, ScrollView, Text, Button,
    TouchableOpacity, Image, ImageBackground} from 'react-native';
import API from '../utils/methods'

export default class CommentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpVotedByUser: false,
            upVoter: -1
        }
    }
    componentDidMount() {
        this.setState({
            isUpVotedByUser: this.props.isUpVotedByUser,
            upVoter: this.props.courseComment.upvoter
        })
    }

    async upVote() {
        let isVoted = this.state.isUpVotedByUser;
        if (!isVoted) {
            this.setState({
                isUpVotedByUser: !isVoted,
                upVoter: (parseInt(this.state.upVoter)+1)
            })
            // 调用点赞
            try{
                let formData = new FormData();
                formData.append('username', this.props.username);
                formData.append('commentId', this.props.courseComment.courseCommentId);
                console.log(formData);
                await API._fetch(API.f_post('/course/comment/upVote', formData));
            } catch(err) {
                console.log(err);
            }
        }
    }
    render(){
        return <View style={styles.container}>
            <Image source={require('../assets/morentouxiang.png')}  
            style={styles.avatar}></Image>

            <View style={{marginLeft: 5}}>
                <Text style={{color: '#000', marginBottom: 5}}>{this.props.courseComment.username}</Text>
                <Text style={{width: API.width*7/10, marginBottom: 20}}>{this.props.courseComment.comment}</Text>
            </View>

            <View style={{position: 'absolute', right: 50, flexDirection: 'row'}}>
                <Text style={{marginRight: 10}}>对我有用({this.state.upVoter})</Text>
                <TouchableOpacity onPress={()=>this.upVote()}>
                    {this.state.isUpVotedByUser? 
                        <Image source={require('../assets/dianzan-after.png')} style={styles.icon}></Image>:
                        <Image source={require('../assets/dianzan.png')} style={styles.icon}></Image>}
                </TouchableOpacity>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        width: API.width, 
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderBottomColor: '#8a8a8a',
        margin: 10
    },
    avatar: {
        width: API.reset(40),
        height: API.reset(40),
        borderRadius: 15
    },
    icon: {
        width: API.reset(20),
        height: API.reset(20),
        marginTop: -5
    }
})