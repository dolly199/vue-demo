import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/HomeContainer.vue'
import Member from '@/components/tabbar/MemberContainer.vue'
import Shopcar from '@/components/tabbar/ShopcarContainer.vue'
import Search from '@/components/tabbar/SearchContainer.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.use(Router)

export default new Router({
  routes: [
   {path: '/home', component: Home},
   {path: '/member', component: Member},
   {path: '/shopcar', component: Shopcar},
   {path: '/search', component: Search},
   {path: '*', redirect: '/home'}
  ],
  linkActiveClass: 'mui-active'
})
