import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: login }
  ]
})
export default router
