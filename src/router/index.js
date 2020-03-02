import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Compare from "../components/Compare.vue"
import comparePlayers from "../components/comparePlayers.vue"
import results from "../components/results.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'headercontent',
    component: Home
  },
  {
    path: '/compare-teams',
    name: 'compare-teams',
    component: Compare
  },
  {
    path: '/comparePlayers',
    name: 'comparePlayers',
    component: comparePlayers
  },
  {
    path: '/results',
    name: 'results',
    component: results
  }
]

const router = new VueRouter({
  routes
})

export default router