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
                <Image source={this.props.picUrl} style={{height: 70, width: 70, position: 'absolute', left: 15}}/>
                <View style={{position: 'absolute', left: 90}}>
                    <Text style={{fontSize: 25}}>{this.props.courseName}</Text>
                    <Text style={{marginTop: 5}}>{this.props.department}、{this.props.teacher}</Text>
                </View>
                <View style={{marginLeft: 10, flexDirection: 'row', position: 'absolute', right: 15}}>
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
        marginLeft: 20,
        marginRight: 20
    }
});