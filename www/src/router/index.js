import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Dashboard from '@/components/DashBoard'
import Vaults from '@/components/Vaults'
// import Vault from '@/components/Vault'
// import Keeps from '@/components/Keeps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/vaults',
      name: 'Vaults',
      component: Vaults
    },
    // {
    //   path: '/vaults/:id',
    //   name: 'VaultById',
    //   component: VaultById
    // },
    // {
    //   path: '/keeps',
    //   name: 'Keeps',
    //   component: Keeps
    // },
  ]
})
