import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import API from '../utils/methods'
export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            'uname': '',
            'password': ''
        };
        this.goToLogin = this.goToLogin.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginPane}>
                    <Text style={{fontSize: 20}}>学号:</Text>
                    <TextInput style={styles.inputArea}/>
                    <Text style={{fontSize: 20}}>密码:</Text>
                    <TextInput style={styles.inputArea} secureTextEntry={true}/>
                    <Text style={{fontSize: 20}}>确认密码:</Text>
                    <TextInput style={styles.inputArea} secureTextEntry={true}/>
                    <Button title="注册" onPress={this.signUp} color='#be8dbd'/>
                    <Text style={{marginTop: 20, marginLeft: 80}} onPress={this.goToLogin}>已有账号？去登录</Text>
                </View>
            </View>
        );
    }

    async signUp() {
        Alert.alert("!");
        try {
            let response = API.post("", {});
        } catch (e) {
            console.log(e);
        }
    }

    goToLogin(){
        this.props.navigation.navigate('Login');
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: API.width
    },

    loginPane: {
        marginTop: 170
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