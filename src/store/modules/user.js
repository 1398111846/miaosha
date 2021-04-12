import { login } from '../../api/login'
import { getToken, setToken } from '../../utils/auth'
const user = {
    state: {
        token: getToken(),
        name: '',
        avatar: '',
        roles: []
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },

    actions: {
        // 登录
        Login({ commit }, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                    const data = response.data
                    //console.log(data)
                    //const tokenStr = data.data.tokenHead + data.data.token
                    //console.log(tokenStr)
                    //setToken(tokenStr)
                    commit('SET_TOKEN', data.data.token)
                    setToken(data.data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }

    }
}

export default user