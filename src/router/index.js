import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
// import Home from '../components/Home.vue'
import Tournaments from '../components/Tournaments.vue'
import ImportExcel from '../components/ImportExcel'
import TournamentDetail from '../components/TournamentDetail.vue'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (!store.getters.isAuthenticated) {
          next()
          return
        }
        next('/')
      }
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    //   beforeEnter: (to, from, next) => {
    //     if (store.getters.isAuthenticated) {
    //       next()
    //       return
    //     }
    //     next('/login')
    //   }
    // },
    {
      path: '/tournaments',
      name: 'tournaments',
      component: Tournaments,
      beforeEnter: (to, from, next) => {
        if (store.getters.isAuthenticated) {
          next()
          return
        }
        next('/login')
      }
    },
    {
      path: '/importExcel',
      name: 'importExcel',
      component: ImportExcel,
      beforeEnter: (to, from, next) => {
        if (store.getters.isAuthenticated) {
          next()
          return
        }
        next('/login')
      }
    },
    {
      path: '/tournament/:id',
      name: 'tournamentDetail',
      component: TournamentDetail,
      beforeEnter: (to, from, next) => {
        if (store.getters.isAuthenticated) {
          next()
          return
        }
        next('/login')
      }
    }
  ]
})
