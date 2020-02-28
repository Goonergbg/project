import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Compare from "../components/Compare.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'headercontent',
    component: Home
  },
{
  path: '/compare-teams',
  name: 'compare-teams',
  component: Compare
}
]

const router = new VueRouter({
  routes
})

export default router
