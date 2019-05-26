import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert} from 'react-native';
import API from '../utils/methods'
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
            <View style={styles.container}>
                <View style={styles.search}>
                    <TextInput style={{width: 300, borderRadius: 15, borderWidth: 1, borderColor: 'grey', fontSize: 25}} onChangeText={(text) => {this.setState({searchText: text})}}/>
                    <TouchableOpacity onPress={this.gotoSearchResult}>
                        <Image source={require('../assets/sousuo.png')} style={{width: 70, height: 70, marginLeft: 10}}/>
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
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
    }
});