import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, 
    Image, TextInput, Alert, ImageBackground} from 'react-native';
import API from '../utils/methods'
import { BlurView, VibrancyView } from "@react-native-community/blur";

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        };
        this.gotoSearchResult = this.gotoSearchResult.bind(this);
    }


    render() {
        return (
            
            <View style={styles.container} source={require('../assets/searchBackground.jpg')}>
                <Image style={[styles.container, {opacity: 0.2}]} source={require('../assets/searchBackground.jpg')}></Image>
                <View style={styles.search}>
                    <TextInput style={{width: 300, borderRadius: 15, borderWidth: 1, borderColor: 'grey', fontSize: 22}} onChangeText={(text) => {this.setState({searchText: text})}}/>
                    <TouchableOpacity onPress={this.gotoSearchResult}>
                        <Image source={require('../assets/sousuo-2.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                    </TouchableOpacity>
                </View>
            </View>
         
            
        );
    }

    gotoSearchResult(){
        this.props.navigation.navigate('SearchResult', {
            searchText: this.state.searchText
        });
    }
}

const styles = StyleSheet.create({
    container: {
        width: API.width,
        alignItems: 'center',
        height: API.height
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 300,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }
});