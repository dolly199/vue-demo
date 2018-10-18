import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyDemo from '@/components/demo'
import Login from '@/components/login'
import Register from '@/components/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: MyDemo,
      children: [
        {
          path: '/demo/login',
          name: 'login',
          component: Login
        },
        {
          path: '/demo/register',
          name: 'register',
          component: Register
        }
      ]
    },
    
  ]
})
