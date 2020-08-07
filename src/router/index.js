import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Front/Home.vue')
  },
  {
    path: '/custom',
    name: 'Dashboard',
    component: () => import('../components/Front/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Front/Products.vue')
      }
    ]

  }
]

const router = new VueRouter({
  routes
})

export default router
