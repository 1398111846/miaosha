import axios from 'axios'
//import qs from 'qs'

const baseURL = "http://10.249.44.159/"
const axios1 = axios.create({
    baseURL,
    timeout: 55000,
    responseType: "json",
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        //token: JSON.stringify(localStorage.getItem("token")||"")   //会在所有请求之前就get，这时候还没有token
        // token: localStorage.getItem("token")||""
    }
});

//请求前置拦截器
// axios1.interceptors.request.use(
//     config => {
//         // 防重复提交
//         const keyString = qs.stringify(
//             Object.assign(
//                 {},
//                 {
//                     url: config.url,
//                     method: config.method
//                 },
//                 config.data
//             )
//         );
//         console.log("axios中")

//         requestMap.set(keyString, true);
//         Object.assign(config, {
//             _keyString: keyString
//         });
//         if (
//             config.method === "post" ||
//             config.method === "put" ||
//             config.method === "delete"
//         ) {
//             // 序列化
//             config.data = qs.stringify(config.data);
//         }

//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

//返回响应拦截器
axios1.interceptors.response.use(

)

const request = (url, data = {}, method = "post") => {
    let Public = {
        //公共参数
        // 'srAppid': ""
        // 参数携带token
        // token: cookie
    };
    // alert("调用一次")
    //const func = {}

    return axios1({
        method,
        url,
        data: Object.assign({}, Public, data),
        params: method.toUpperCase() === "GET" && data,
    });
}

export { request };