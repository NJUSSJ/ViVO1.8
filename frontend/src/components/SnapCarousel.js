import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import API from '../utils/methods'
import StarRating from './StarRating';

export default class SnapCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {
                    courseId: 1,
                    courseName: '中国电影赏析',
                    overallScore: 4.5,
                    picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558870633991&di=4ce8574d972552b602f59c8121a3073a&imgtype=0&src=http%3A%2F%2Ftu.openossfile.com%3A9186%2Fgroup1%2FM00%2F45%2F61%2FrBgIBlzOT8fJxRFnAACPJGomnIM780.jpg'
                },
                {
                    courseId: 1,
                    courseName: 'C++程序设计',
                    overallScore: 4.8,
                    picUrl: 'http://getintopc.com/wp-content/uploads/2014/02/CPlusPlus.jpg'
                },
                {
                    courseId: 1,
                    courseName: '五律协同观',
                    overallScore: 3.9,
                    picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559466675&di=06d7d7523ecbd8ce30d8d5b3c5289a9b&imgtype=jpg&er=1&src=http%3A%2F%2Ftxt22262.book118.com%2F2017%2F0508%2Fbook105052%2F105051619.jpg'
                },
            ]
        }
    }

    _renderItem ({item, index}) {
        return (
            <TouchableOpacity style={styles.cardContainer}
                // onPress={()=>{this.props.nav.navigate('Detail', {courseId: item.courseId})}}
            >
                <Image style={styles.image} source={{uri: item.picUrl}}></Image>
                <Text style={styles.courseName}>{ item.courseName }</Text>
                <View style={{flexDirection: 'row', paddingLeft: 10}}>
                    <StarRating
                        maxStars={5}
                        rating={item.overallScore}
                        disabled={true}
                        starSize={25}
                    />
                    <Text style={styles.score}>{item.overallScore}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render () {
        return (
            <Carousel
              layout={'stack'}
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={API.width*19/20}
              itemWidth={API.width*19/20}
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
        backgroundColor: '#000',
        alignItems: 'flex-start'
    },
    image:{
        width: API.width*9/10-2,
        height: 200,
        borderRadius: 5
    },
    courseName: {
        fontSize: 25,
        color: '#fff',
        paddingTop: 10,
        paddingLeft: 10
    },
    score: {
        color: '#f4ea2a',
        margin: 10
    }
})