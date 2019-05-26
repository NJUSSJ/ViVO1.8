import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert, Image} from 'react-native';
import API from '../utils/methods'
import StarRating from './StarRating'

export default class CourseItem extends React.Component{
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.picUrl} style={{width: 70, height: 70}}/>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 25, color: 'black'}}>{this.props.courseName}</Text>
                    <Text style={{marginTop: 5}}>{this.props.department}、{this.props.teacher}</Text>
                </View>
                <View style={{flexDirection: 'row', position: 'absolute', right: 50}}>
                    <StarRating maxStars={5} rating={this.props.overallScore} disabled={true} starSize={25} style={{marginTop: 20}}/>
                    <Text style={{marginTop: 5, marginLeft:10, fontSize: 20}}>{this.props.overallScore}</Text>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: API.width,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20
    }
});