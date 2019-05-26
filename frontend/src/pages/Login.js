import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import API from '../utils/methods'
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            'uname': '',
            'password': ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginPane}>
                    <Text style={{fontSize: 20}}>用户名:</Text>
                    <TextInput style={styles.inputArea}/>
                    <Text style={{fontSize: 20}}>密码:</Text>
                    <TextInput style={styles.inputArea} secureTextEntry={true}/>
                    <Button title="登录" onPress={this.login} color='#be8dbd'/>
                    <Text style={{marginTop: 20, marginLeft: 80}} onPress={this.goToSignUp}>没有账号？去注册一个</Text>
                </View>
            </View>
        );
    }

    async login() {
        Alert.alert("!");
        try {
            let response = API.post("", {});
        } catch (e) {
            console.log(e);
        }
    }

    goToSignUp(){
        Alert.alert("!");
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