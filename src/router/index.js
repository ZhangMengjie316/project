import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'index',component: Index},
  {path: '/',name: 'home',component: Home},
  {path: '/',name: 'home',component: Home},
]

const router = new VueRouter({
  routes
})

export default router
