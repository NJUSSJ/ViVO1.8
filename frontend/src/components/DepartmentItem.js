import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class DepartmentItem extends Component {
    render() {
        return <View style={styles.itemContainer}>
            <Image source={this.props.iconUrl}></Image>
            <Text style={}></Text>
        </View>
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row'
    },
    icon: {

    }
})