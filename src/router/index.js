import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Shopcart = () => import('views/shopcart/Shopcart')
const Profile = () => import('views/profile/Profile')

//1.安装插件
Vue.use(Router)

//2.创建路由并导出
export default new Router({
  routes: [
    {
      path: '',
      redirect: "/home"
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  // 路径模式#
  mode:"history"
})
