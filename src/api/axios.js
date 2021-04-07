import axios from 'axios'
import qs from 'qs'

const baseURL = "http://10.249.44.159/"
const axios1 = axios.create({
    baseURL,
    timeout: 1000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data);
    }],
});
export default service;