import { Dimensions, StatusBar, Platform, BackHandler, Alert } from 'react-native'
// import ImageCropPicker from "react-native-image-crop-picker";
// import Toast from 'react-native-root-toast';
// import ImageCropPicker from "react-native-image-crop-picker";
const address = 'http://139.224.232.10:8080/vivo'
const { width, height, scale } = Dimensions.get('window')

/**
 * // 返回按照设备宽度调整后的值
 * @param {int} init - 原始宽度
 */
function reset(init) {
    if (width / height < 375 / 667) {
        return init / 375 * width
    } else {
        return init / 667 * height
    }
}
/**
 * // 返回按照设备宽度调整后的值
 * @param {int} init - 原始宽度
 */
function resetWidth(init) {
    return init / 375 * width
}
/**
 * // 返回按照设备高度调整后的值
 * @param {int} init - 原始高度
 */
function resetHeight(init) {
    return init / 667 * height
}
/**
 * // 返回按照设备字体大小调整后的值
 * @param {int} init - 原始字体大小
 */
function resetFontSize(init) {
    return init / 2 * scale
}
/**
 * // POST请求
 * @typedef {}
 * @type {object}
 * @property {string} [url] - 接口名（API）
 * @property {formdata} [formData] - 请求接口时的参数
 */
function post(url, postData) {
    console.log('postData:',postData,JSON.stringify(postData))
    options = {
        method: "POST",
        headers: {
            "Content-Type":  "application/json"
        },
        body: JSON.stringify(postData)
    };
    var promise = new Promise(function (resolve, reject) {
        fetch(address + url, options).then(data => {
            console.log('******')
            resolve(data);
            console.log('data'+data)
        }).catch(error => {
            reject(error);
        });
    });
    return promise;

}
function f_post(url, formData) {
    options = {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: formData
    };
    var promise = new Promise(function (resolve, reject) {
        fetch(address + url, options).then(data => {
            console.log('******')
            resolve(data);
            console.log('data'+data)
        }).catch(error => {
            reject(error);
        });
    });
    return promise;
}
function get(url) {
  
    let options = {
        method: "GET",
        headers: {
            // Accept: "application/json",
        }
    };
    let promise = new Promise(function (resolve, reject) {
        fetch(address + url , options).then(data => {
            resolve(data);
        }).catch(error => {
            reject(error);
        });
    });
    return promise;
}

// function imagePicker() {
//     console.log('imagePicker')
//     StatusBar.setBarStyle("dark-content");
//     let promise = new Promise(function (resolve, reject) {
//         ImageCropPicker
//             .openPicker({ mediaType: "photo", writeTempFile: false, loadingLabelText: "正在处理图片" })
//             .then(data => {
//                 StatusBar.setBarStyle("light-content");
//                 resolve(data);
//             })
//             .catch(error => {
//                 StatusBar.setBarStyle("light-content");
//                 switch (error.code) {
//                     case "E_PERMISSION_MISSING":
//                         reject('请在iPhone的“设置-隐私”选项中，允许访问你的相册')
//                     default:
//                         reject('操作取消')
//                 }
//             });
//     });
//     return promise;
// }

/**
 * // 设置异步超时返回
 * @param {function} fetch_promise - 异步函数
 * @param {int} timeout - 超时时间
 */
function _fetch(fetch_promise, timeout = 15000) {
    var abort_fn = null;
    setTimeout(function () {
        abort_fn();
    }, timeout);
    var abort_promise = new Promise(function (resolve, reject) {
        abort_fn = function () {
            reject("timeout");
        };
    });
    var abortable_promise = Promise.race([fetch_promise, abort_promise]);
    return abortable_promise;
}
//网络变化监听
function network() {
    NetInfo.addEventListener("connectionChange", data => {
        data.type == "none"
            ? Alert.alert("网络连接已断开", "请检查你的网络，确保在网络连接下进行使用", [
                {
                    text: "确定",
                    onPress: () => { }
                }
            ])
            : "";
    });
}
// 安卓后退处理
function backhandler() {
    let listener = BackHandler.addEventListener("hardwareBackPress", () => {
        Alert.alert("提示", "您确定要退出吗？", [
            {
                text: "确定",
                onPress: () => {
                    BackHandler.exitApp();
                }
            }, {
                text: "取消",
                onPress: () => { }
            }
        ], { cancelable: false });
        return true;
    });
    return listener;
}

/**
 * // 提示弹窗
 * @typedef {}
 * @type {object}
 * @property {string} [title] - 弹窗标题
 * @property {string} [content] - 弹窗内容
 * @property {string} [confirmtext] - 弹窗确定键文字
 * @property {function} [confirmFunction] - 确定键触发的函数
 */
function modalAlert({
    title = "提示",
    content,
    confirmtext = "确定",
    confirmFunction = () => { }
} = {}) {
    Alert.alert(title, content, [
        {
            text: confirmtext,
            onPress: confirmFunction
        }
    ]);
}
/**
 * // 确认框弹窗
 * @typedef {}
 * @type {object}
 * @property {string} [title] - 弹窗标题
 * @property {string} [content] - 弹窗内容
 * @property {string} [confirmtext] - 弹窗确定键文字
 * @property {string} [canceltext] - 弹窗取消键文字
 * @property {function} [confirmFunction] - 确定键触发的函数
 * @property {function} [cancelFunction] - 取消键触发的函数
 */
function confirmAlert({
    title = "提示",
    content,
    confirmtext = "确定",
    canceltext = "取消",
    confirmFunction = () => { },
    cancelFunction = () => { }
} = {}) {
    Alert.alert(title, content, [
        {
            text: confirmtext,
            onPress: confirmFunction
        }, {
            text: canceltext,
            onPress: cancelFunction
        }
    ], { cancelable: false });
}

export default {
    get,
    address,
    height,
    width,
    reset,
    resetWidth,
    resetHeight,
    resetFontSize,
    post,
    _fetch,
    network,
    backhandler,
    modalAlert,
    confirmAlert,
}