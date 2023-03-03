import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
    name: 'DataBindingAttributeView',
    component: () =>
      import(
        /* webpackChunkName : "databinding" */ '../views/1_databinding/DataBindingAttributeView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
