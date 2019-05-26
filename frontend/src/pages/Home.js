import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import SnapCarousel from '../components/SnapCarousel'

export default class Home extends Component {
    render(){
        return <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.recommandPrompt}>
                热门课程
            </Text>
            <View>
                <SnapCarousel/>
            </View>
            
            <View style={{marginTop: 20}}>
                <Text style={styles.recommandPrompt}>
                    热门学院
                </Text>
            </View>

            
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    recommandPrompt:{
        fontSize: 28,
        color: '#000',
        margin: 10,
    }
})