import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import API from '../utils/methods'
import CourseItem from '../components/CourseItem'
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            'username': '',
            'password': ''
        };
        this.login = this.login.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginPane}>
                    <Text style={{fontSize: 20}}>用户名:</Text>
                    <TextInput style={styles.inputArea} onChangeText={(text) => {this.setState({username: text})}}/>
                    <Text style={{fontSize: 20}}>密码:</Text>
                    <TextInput style={styles.inputArea} secureTextEntry={true} onChangeText={(text) => {this.setState({password: text})}}/>
                    <Button title="登录" onPress={this.login} color='#be8dbd'/>
                    <Text style={{marginTop: 20, marginLeft: 80}} onPress={()=>{this.props.navigation.navigate('SignUp')}}>没有账号？去注册一个</Text>

                </View>
            </View>
        );
    }

    async login() {
        try {
            let formData = new FormData();
            formData.append('username', this.state.username);
            formData.append('password', this.state.password);
            let response = await API._fetch(API.f_post('/login', formData));
            Alert.alert(await response.text());
12        } catch (e) {
            console.log(e);
        }
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: API.width
    },

    loginPane: {
        marginTop: 200
    },

    inputArea: {
        borderColor: 'grey',
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 2,
        width: 300,
        fontSize: 20,
        marginBottom: 40
    }
});