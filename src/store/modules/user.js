import { login } from '../../api/login'
const user = {
    state: {
        token: '',
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
                    const tokenStr = data.tokenHead + data.token
                    //setToken(tokenStr)
                    commit('SET_TOKEN', tokenStr)
                    console.log(tokenStr)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }

    }
}

export default user