import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, Image} from 'react-native';
import API from '../utils/methods';

export default class Score extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <View>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                 <Image source={require('../assets/bj-icon-fh.png')} style={styles.backIcon}></Image>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    backIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 20,
        left: 20
    },
})