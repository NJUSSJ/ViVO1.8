import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import API from '../utils/methods'
import StarRating from './StarRating';

export default class SnapCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: []
        }
    }

    componentDidMount() {
        this.getHighScore();
    }

    _renderItem = ({item, index}) =>  {
        return (
            <TouchableOpacity style={styles.cardContainer} key={item.courseId}
                onPress={()=>{this.props.nav.navigate('Detail', {courseId: item.courseId})}}
            >
                <Image style={styles.image} source={{uri: item.picUrl}}></Image>
                <Text style={styles.courseName}>{ item.courseName }</Text>
                <View style={{flexDirection: 'row', paddingLeft: 10}}>
                    <StarRating
                        maxStars={5}
                        rating={item.overallScore}
                        disabled={true}
                        starSize={20}
                    />
                    <Text style={styles.score}>{parseFloat(item.overallScore).toFixed(1)}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    async getHighScore() {
        try {
            let formData = new FormData();
            formData.append('keyword', 'keyword');
            let response = await API._fetch(API.f_post('/course/highScore', formData));
            let data = await response.json();
            this.setState({
                entries: data.slice(0,4)
            });
        } catch (e) {
            console.log(e);
        }

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
              loop={true}
              autoplay={true}
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
        borderRadius: 5,
    },
    courseName: {
        fontSize: 22,
        color: '#fff',
        paddingTop: 10,
        paddingLeft: 10
    },
    score: {
        color: '#f4ea2a',
        margin: 5
    }
})