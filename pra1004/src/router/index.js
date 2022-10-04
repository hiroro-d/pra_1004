import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cssanim01',
    name: 'cssanim01',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CssAnim01.vue')
  },
  {
    path: '/cssanim02',
    name: 'cssanim02',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CssAnim02.vue')
  },
  {
    path: '/webapiimg',
    name: 'webapiimg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WebApiImg.vue')
  },
  {
    path: '/CssAnim03',
    name: 'CssAnim03',
    component: () => import( '../views/CssAnim03.vue')
  },
  {
    path: '/DynamicComp',
    name: 'DynamicComp',
    component: () => import( '../views/DynamicComp.vue')
  },
  {
    path: '/ComputedMethods',
    name: 'ComputedMethods',
    component: () => import( '../views/ComputedMethods.vue')
  },
  {
    path: '/LifeCycle',
    name: 'LifeCycle',
    component: () => import( '../views/LifeCycle.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
