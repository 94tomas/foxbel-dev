import Vue from 'vue'
// import axios from 'axios'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // path: '/',
    name: 'Layout',
    component: () => import('../layouts/MainNavigation.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {auth: true}
      },
      {
        path: '/recientes',
        name: 'Recent',
        component: () => import(/* webpackChunkName: "about" */ '../views/Recent.vue'),
        meta: {auth: true}
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach(function (to, from, next) {
//   // console.log(to)
//   // console.log(from)
//   // next()
//   if (to.name != 'Login') {
//     if (localStorage.getItem('auth')) {
//       next() 
//     }
//     else {
//       next({
//         name:"Login"
//       })
//     }
//   } else {
//     if (localStorage.getItem('auth')) {
//       next({
//         name:"Home"
//       })
//     }
//     next()
//   }
// })

export default router
