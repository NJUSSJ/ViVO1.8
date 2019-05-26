import React, {Component} from 'react';
import {Platform, StyleSheet,  View, ScrollView, Text, Button,
    TouchableOpacity, Image, ImageBackground} from 'react-native';
import API from '../utils/methods'

export default class CommentItem extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <View style={styles.container}>
            <Image source={require('../assets/morentouxiang.png')}  
            style={styles.avatar}></Image>

            <View style={{marginLeft: 5}}>
                <Text style={{color: '#000'}}>{this.props.username}</Text>
                <Text>{this.props.comment}</Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        width: API.width, 
        flexDirection: 'row',
        height: API.reset(50),
        borderBottomWidth: 0.3,
        borderBottomColor: '#8a8a8a',
        margin: 10
    },
    avatar: {
        width: API.reset(40),
        height: API.reset(40),
        borderRadius: 15
    }
})