import axios from 'axios'
//import { Message, MessageBox } from 'element-ui'
//import store from '../store'


// 创建axios实例
const service = axios.create({
    //baseURL: "http://admin-api.macrozheng.com", // api的base_url
    baseURL: "http://10.249.44.159:8080/",
    timeout: 15000, // 请求超时时间
    responseType:"json",
    headers: {
        //"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        "Content-Type": "application/json",
    }
})

// request拦截器

// respone拦截器

export default service