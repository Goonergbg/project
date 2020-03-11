import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Compare from "../components/Compare.vue"
import comparePlayers from "../components/comparePlayers.vue"
import results from "../components/results.vue"
import resultPlayers from "../components/resultPlayers.vue"
import forum from "../components/forum.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'headercontent',
    component: Home
  },
  {
    children: [{
      path: '/resultPlayers',
      name: 'resultPlayers',
      component: resultPlayers
    }],
    path: '/comparePlayers',
    name: 'comparePlayers',
    component: comparePlayers
  },
  {
    children: [{
      path: '/results',
      name: 'results',
      component: results
    }],
    path: '/compare-teams',
    name: 'compare-teams',
    component: Compare
  },
  {
    path: '/forum',
    name: 'forum',
    component: forum
  },
]

const router = new VueRouter({
  routes
})

export default router