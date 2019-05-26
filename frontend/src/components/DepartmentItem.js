import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import API from '../utils/methods'

export default class DepartmentItem extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <TouchableOpacity >
            <View style={styles.itemContainer}>
            <Image source={this.props.iconUrl} style={styles.icon}></Image>
            <Text style={styles.departName}>{this.props.departName}</Text>
        </View>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        height: API.reset(50),
        marginLeft: 20,
    },
    icon: {
        width: API.reset(30),
        height: API.reset(30),
    },
    departName: {
        color: '#8a8a8a',
        fontSize: 18,
        marginTop: 5,
        marginLeft: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: '#8a8a8a',
        width: API.width*3/4,
        height: API.reset(30)
    }
})