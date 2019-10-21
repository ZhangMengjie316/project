import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Details from '../views/ProductDetails.vue'
import List from '../views/ProductList.vue'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {path: '/',component: Index},
  {path: '/index',component: Index},
  {path: '/details/:lid',component: Details,props:true},
  {path: '/products',component:List},
  {path: '/*',component:NotFound},
]

const router = new VueRouter({
  routes
})

export default router
