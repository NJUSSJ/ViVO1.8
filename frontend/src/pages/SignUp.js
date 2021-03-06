import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import API from '../utils/methods'
import {Card} from 'native-base'
export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            password: '',
            passwordAgain: '',
        };

    }

    async signUp() {
        
        try {
            let formData = new FormData();
            console.log('uname',this.state.uname)
            formData.append('username', this.state.uname);
            formData.append('password', this.state.password);

            if (this.state.password !== this.state.passwordAgain) {
                Alert.alert('密码不一致！')
                return;
            }
            let response = await API._fetch(API.f_post( '/register', formData));
            let responseJson = await response.text();
            console.log(responseJson);

            switch(responseJson) {
                case 'success': {
                    this.props.navigation.navigate('Login');
                    break;
                }
                case 'duplicateUsername': {
                    Alert.alert('该用户名已存在');
                    break;
                }
                default: {
                    Alert.alert('学号不合法');
                    break;
                }
            }
            
        } catch (e) {
            console.log(e);
        }
    }

    goToLogin(){
        console.log(this.props.navigation)
        this.props.navigation.navigate('Login');
    }


    render() {
        return (
            <View style={styles.container}>
                <Card style={{width: API.width-40, height: API.height*3/4, alignItems: 'center',
            justifyContent: 'center'}}>
                 <Text style={{fontSize: 23, borderBottomColor: '#be8dbd', borderBottomWidth: 1, marginBottom: 40}}>注    册</Text>
                   
                <View >
                    <Text style={{fontSize: 15}}>用户名:</Text>
                    <TextInput style={styles.inputArea}
                        onChangeText={(text)=>this.setState({uname: text})}
                    />
                    <Text style={{fontSize: 15}}>密码:</Text>
                    <TextInput style={styles.inputArea} 
                    onChangeText={(text)=>this.setState({password: text})}
                    secureTextEntry={true}/>
                    <Text style={{fontSize: 15}}>确认密码:</Text>
                    <TextInput style={styles.inputArea} 
                    onChangeText={(text)=>this.setState({passwordAgain: text})}
                    secureTextEntry={true}/>
                    <Button title="注册" onPress={()=>{this.signUp()}} color='#be8dbd'/>
                    <Text style={{marginTop: 20, marginLeft: 80}} onPress={()=>{this.goToLogin()}}>已有账号？去登录</Text>
                </View>
                </Card>
                
            </View>
        );
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