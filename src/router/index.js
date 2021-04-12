import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'
import Layout from '../views/Layout/Layout'

Vue.use(VueRouter)


const routes = [
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: Home,
      meta: {title: '首页'}
    }]
  }
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/ums/register/register.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
