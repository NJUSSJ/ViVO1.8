import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import API from '../utils/methods'
export default class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <TextInput style={{width: 300, borderRadius: 15, borderWidth: 1, borderColor: 'grey', fontSize: 25}}/>
                    <Image source={require('../assets/sousuo.png')} style={{width: 70, height: 70, marginLeft: 10}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: API.width,
        alignItems: 'center',
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
    }
});