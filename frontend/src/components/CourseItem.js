import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert, Image} from 'react-native';
import API from '../utils/methods'

export default class CourseItem extends React.Component{
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.picUrl}/>
                <View>
                    <Text>{this.props.courseName}</Text>
                    <Text>{this.props.department}{this.props.teacher}</Text>
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