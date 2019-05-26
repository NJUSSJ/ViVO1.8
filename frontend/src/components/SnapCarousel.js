import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import {StyleSheet, Text, View, Image} from 'react-native';
import API from '../utils/methods'

export default class SnapCarousel extends Component {

    constructor() {
        super();
        this.state = {
            entries: [
                {
                    courseName: '中国电影赏析',
                    overallScore: 4.5,
                    picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558870633991&di=4ce8574d972552b602f59c8121a3073a&imgtype=0&src=http%3A%2F%2Ftu.openossfile.com%3A9186%2Fgroup1%2FM00%2F45%2F61%2FrBgIBlzOT8fJxRFnAACPJGomnIM780.jpg'
                },
                {
                    courseName: 'C++程序设计',
                    overallScore: 4.8,
                    picUrl: 'http://getintopc.com/wp-content/uploads/2014/02/CPlusPlus.jpg'
                },
                {
                    courseName: '五律协同观',
                    overallScore: 3.9,
                    picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559466675&di=06d7d7523ecbd8ce30d8d5b3c5289a9b&imgtype=jpg&er=1&src=http%3A%2F%2Ftxt22262.book118.com%2F2017%2F0508%2Fbook105052%2F105051619.jpg'
                },
            ]
        }
    }

    _renderItem ({item, index}) {
        return (
            <View style={styles.cardContainer}>
                <Image style={styles.image} source={{uri: item.picUrl}}></Image>
                <Text style={styles.courseName}>{ item.courseName }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              layout={'stack'}
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={400}
              itemWidth={400}
              style={{alignSelf: 'center'}}
            />
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        width: API.width*9/10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        marginLeft: API.width/20,
        backgroundColor: '#000'
    },
    image:{
        width: API.width*9/10-2,
        height: 200,
        borderRadius: 5
    },
    courseName: {
        fontSize: 25,
        color: '#fff',
        padding: 10
    }
})