import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutmonster/:id',
    name: 'AboutView',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBindingView',
    component: () =>
      import(
        /* webpackChunkName : "databinding" */ '../views/1_databinding/DataBindingView.vue'
      )
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelectView',
    component: () =>
      import(
        /* webpackChunkName : "databinding" */ '../views/1_databinding/DataBindingSelectView.vue'
      )
  },
  {
    path: '/attr',
    name: 'DataBindingAttrView',
    component: () =>
      import(
        /* webpackChunkName : "attr" */ '../views/1_databinding/DataBindingAttrView.vue'
      )
  },
  {
    path: '/style',
    name: 'DataBindingStyleView',
    component: () => import('../views/1_databinding/DataBindingStyleView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/event/LoginView.vue')
  },
  {
    path: '/pinia',
    name: 'Pinia',
    component: () => import('../views/PiniaView.vue')
  },
  {
    path: '/globalstate',
    name: 'GlobalState',
    component: () => import('../views/GlobalStateView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
