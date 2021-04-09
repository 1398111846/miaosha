import request from '../utils/request'

export function login(username, password) {
    return request({
        url: 'admin/login',
        method: 'POST',
        data: {
            username,
            password
        }
    })
}

export function getInfo() {
    return request({
      url: '/admin/info',
      method: 'get',
    })
  }