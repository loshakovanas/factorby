import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/history',
    name: 'history',
    // route level code-splitting
    // this generates a separate chunk (history.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "history" */ '../views/PlayerView.vue')
  },
  {
    path: '/accident',
    name: 'accident',
    // route level code-splitting
    // this generates a separate chunk (accident.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "accident" */ '../views/DiaryView.vue')
  },
  {
    path: '/liquidation',
    name: 'liquidation',
    // route level code-splitting
    // this generates a separate chunk (liquidation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "liquidation" */ '../views/ChernobylView.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
