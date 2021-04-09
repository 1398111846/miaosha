import axios from 'axios'
//import { Message, MessageBox } from 'element-ui'
//import store from '../store'


// 创建axios实例
const service = axios.create({
    baseURL: "http://admin-api.macrozheng.com", // api的base_url
    timeout: 15000 // 请求超时时间
})

// request拦截器

// respone拦截器

export default service