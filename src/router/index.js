import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Details from '../views/ProductDetails.vue'
import List from '../views/ProductList.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',component: Index},
  {path: '/index',component: Index},
  {path: '/details/:lid',component: Details,props:true},
  {path: '/productlist',component:List},
  {path: '/*',component:{
    template:`<h2 style="color:red; text-align:center">404:Not Found<h2>`
  }},
]

const router = new VueRouter({
  routes
})

export default router
