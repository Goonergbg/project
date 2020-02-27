import Vue from 'vue'
import VueRouter from 'vue-router'
import headercontent from '../components/headercontent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'headercontent',
    component: headercontent
  }]

const router = new VueRouter({
  routes
})

export default router
