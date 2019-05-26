import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import API from '../utils/methods'
export default class ImagePicker extends Component {


    constructor() {
        super();
        this.state = {
            imgUrl: ''
        }
    }

    componentDidMount() {
        // this.getImage();
    }

    async getImage() {
        try {
            let response = await API._fetch(API.get('/getPic'));
            let responseData = await response.json();

            console.log();
            // console.log('response',responseData);
            // this.setState({imgUrl: responseData});
        }
        catch(error) {
            console.log(error);
        }
    }

    async uploadImg() {
        try {
          let photo = await API.imagePicker()
          let formData = new FormData();

          let submitPhoto = {
            uri: photo.path,
            name: '/image/' + new Date().getTime(),
            type: 'multipart/form-data',
          }
          formData.append("file", submitPhoto);
          
          let _this = this
          
          fetch('http://appback.futuredigitalplanets.com/index.php/Api/FileUpload/uploadImage', {
            method: 'POST',
            headers: {
              // Accept: "application/json",
              'Content-Type': 'multipart/form-data',
            },
            body: formData,
          })
            .then((response) => response.text())
            .then((responseData) => {
              
              let url = JSON.parse(responseData).data.path;
              _this.setState({
                imgUrl: url
              })

              _this.saveImage(url);
            
            })
            .catch((error) => {
                console.log(error)
            });
        } catch (error) {
          console.log(error)
        }
    }

    async saveImage(url) {
        try {
            let response = await API._fetch(API.post('/uploadPic', url));
            let responseData = await response.json();

            console.log(responseData);
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return <View style={{height: API.height, width: API.width, 
        justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>this.uploadImg()} >
            {this.state.imgUrl !== '' ? 
                <Image source={{uri: this.state.imgUrl}} />
                : <Text>添加图片</Text> }
        </TouchableOpacity>
        </View>
    }
}