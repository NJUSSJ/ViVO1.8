import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Alert} from 'react-native';
import API from '../utils/methods'
import CourseItem from '../components/CourseItem'
export default class DepartmentResult extends Component {
    constructor() {
        super();
        this.search = this.search.bind(this);
        this.state = {
            data: []
        }
    }

    componentDidMount(): void {
        const searchText = this.props.navigation.getParam("searchText", "");
        this.search(searchText);
        console.log(this.search);
    }

    render() {



        return (
            <View style={styles.container}>
                <View style={styles.list}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => item.courseId}
                        renderItem={({item}) => <TouchableOpacity onPress={() => {this.props.navigation.navigate('Detail', {courseId: item.courseId})}}>
                            <CourseItem picUrl={item.picUrl} courseName={item.courseName} department={item.department}
                                        teacher={item.instructor} overallScore={item.overallScore}/>
                        </TouchableOpacity>}/>
                </View>
            </View>
        );
    }

    async search(searchText) {
        try {
            let formData = new FormData();
            formData.append("department", searchText);
            let response = await API._fetch(API.f_post('/course/classification', formData));
            let data = await response.json();
            console.log(data);
            this.setState({
                data: data
            });
        } catch (e) {
            console.log(e);
        }

    }
}

const styles = StyleSheet.create({
    container: {
        width: API.width
    },

    title: {
        flexDirection: 'row'
    },

    list: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderColor: 'grey',
    }
});