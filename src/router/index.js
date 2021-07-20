import VueRouter from 'vue-router'
import Vue from 'vue'
const Home = () => import ('views/home/Home') 
const Category = () => import ('views/category/Category') 
const Cart = () => import ('views/cart/Cart') 
const Profile = () => import ('views/profile/Profile') 
const Detail = () => import ('views/detail/Detail') 

Vue.use(VueRouter);

const routes = [
  { path: '', redirect: "/home" },
  { path: '/home', component: Home },
  { path: '/detail', component: Detail },
  { path: '/category', component: Category },
  { path: '/cart', component: Cart },
  { path: '/profile', component: Profile }
]
export default new VueRouter({
  routes,
  mode: 'history'
})


