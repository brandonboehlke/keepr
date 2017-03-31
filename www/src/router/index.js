import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import Register from '@/components/register'
import Login from '@/components/login'
import Dashboard from '@/components/dashboard'
import Vaults from '@/components/vaults'
import Vault from '@/components/vault'
import Keeps from '@/components/keeps'
import Keep from '@/components/keep'

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
    {
      path: '/vaults/:id',
      name: 'Vault',
      component: Vault
    },
    {
      path: '/keeps',
      name: 'Keeps',
      component: Keeps
    },
    {
      path: '/keeps/:id',
      name: 'Keep',
      component: Keep
    }
  ]
})
