import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import SnapCarousel from '../components/SnapCarousel'

export default class Home extends Component {
    render(){
        return <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.recommandPrompt}>
                为你推荐
            </Text>
            <SnapCarousel/>
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    recommandPrompt:{
        fontSize: 30,
        color: '#000',
        margin: 10,
    }
})