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

export function createAdmin(data) {
    return request({
        url: '/admin/register',
        method: 'POST',
        data: data
    })
}
export function getInfo() {
    return request({
      url: '/admin/info',
      method: 'get',
    })
  }