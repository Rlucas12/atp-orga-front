import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tournaments: [],
    user: undefined,
    isAuthenticated: !!window.localStorage.getItem('tokentennis')
  },
  getters: {
    tournaments: state => state.tournaments,
    user: state => state.user,
    isAuthenticated: state => !!state.isAuthenticated
  },
  mutations: {
    login_success(state, user) {
      state.user = user
      state.isAuthenticated = true
      window.location.href = '/'
    },
    login_error() {
      console.log('error')
    },
    tournaments_success(state, tournaments) {
      state.tournaments = tournaments
    }
  },
  actions: {
    login({ commit }, { email, password }) {
      axios
        .post('http://172.20.10.2:3000/api/users/login', {
          email,
          password
        })
        .then(({ data }) => {
          localStorage.setItem('tokentennis', data.token)
          commit('login_success', data)
        })
        .catch(() => {
          commit('login_failed')
        })
    },
    getTournaments({ commit }, token) {
      axios
        .get('http://172.20.10.2:3000/api/tournaments', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(({ data }) => commit('tournaments_success', data))
    }
  }
})