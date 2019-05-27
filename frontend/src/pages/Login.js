import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import API from '../utils/methods'
import CourseItem from '../components/CourseItem'
import {Card} from 'native-base'
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
                <Card style={{width: API.width-40, height: API.height*3/4, alignItems: 'center',
        justifyContent: 'center'}}>
                    <Text style={{fontSize: 23, borderBottomColor: '#be8dbd', borderBottomWidth: 1, marginBottom: 50}}>登   录</Text>
                    <View >
                        <Text style={{fontSize: 15}}>用户名:</Text>
                        <TextInput style={styles.inputArea} onChangeText={(text) => {this.setState({username: text})}}/>
                        <Text style={{fontSize: 15}}>密码:</Text>
                        <TextInput style={styles.inputArea} secureTextEntry={true} onChangeText={(text) => {this.setState({password: text})}}/>
                        <Button title="登录" onPress={this.login} color='#be8dbd'/>
                        <Text style={{marginTop: 20, marginLeft: 60}} onPress={()=>{this.props.navigation.navigate('SignUp')}}>没有账号？去注册一个</Text>
                    </View>
                </Card>
            </View>
        );
    }

    async login() {
        try {
            let formData = new FormData();
            formData.append('username', this.state.username);
            formData.append('password', this.state.password);
            let response = await API._fetch(API.f_post('/login', formData));
            let res = await response.text();
            
            switch(res) {
                case 'success': {
                    this.props.navigation.navigate('Root');
                    API.toastLong('登录成功');
                    global.username = this.state.username;
                    storage.save({
                        key: 'username',
                        id: '1',
                        data: this.state.username
                      })
                    break;
                }
                case 'wrongPassword': {
                    API.toastLong('用户密码错误');
                    break;
                }
                default: {
                    API.toastLong('该用户未注册');
                    break;
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: API.width,
        height: API.height,
        backgroundColor: '#be8dbd'
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
        fontSize: 15,
        marginBottom: 40
    }
});