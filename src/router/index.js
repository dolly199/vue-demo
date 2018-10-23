import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/HomeContainer.vue'
import Member from '@/components/tabbar/MemberContainer.vue'
import Shopcar from '@/components/tabbar/ShopcarContainer.vue'
import Search from '@/components/tabbar/SearchContainer.vue'
import NewsList from '@/components/news/NewsList.vue'
import NewsInfo from '@/components/news/NewsInfo.vue'
import PhotoList from '@/components/photo/PhotoList.vue'
import PhotoInfo from '@/components/photo/PhotoInfo.vue'
import GoodsList from '@/components/goods/GoodsList.vue'

Vue.use(Router)

export default new Router({
  routes: [
   {path: '/home', component: Home},
   {path: '/member', component: Member},
   {path: '/shopcar', component: Shopcar},
   {path: '/search', component: Search},
   {path: '/home/newslist', component: NewsList},
   {path: '/home/newsinfo/:id', component: NewsInfo},
   {path: '/home/photolist', component: PhotoList},
   {path: '/home/photoinfo/:id', component: PhotoInfo},
   {path: '/home/goodslist', component: GoodsList},
   {path: '*', redirect: '/home'}
  ],
  linkActiveClass: 'mui-active'
})
