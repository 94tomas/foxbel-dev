import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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

router.beforeEach(function (to, from, next) {
  // console.log(to)
  // console.log(from)
  // next()
  if (to.name != 'Login') {
    if (localStorage.getItem('code')) {
      next() 
    }
    else {
      if (to.query.code) {
        localStorage.setItem('code', to.query.code)
        axios.get(`https://connect.deezer.com/oauth/access_token.php`, {
          params: {
            app_id: '475022',
            secret: '5bbc0b653f7a9212a0bce48173297855',
            code: to.query.code
          }
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
        next()
      } else {
        next({
          name:"Login"
        })
      }
    }
  } else {
    if (localStorage.getItem('code')) {
      next({
        name:"Home"
      })
    }
    next()
  }
  
  // if(to.meta.auth){
  //   if(localStorage.getItem('code')){
  //     next()
  //   } else {
  //     next({
  //       name:"Login"
  //     })
  //   }
  // } else {
  //   next()
  // }
})

export default router
