import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state: {
    //     user : {},
    //     token : window.localStorage.getItem('token') || ''
    // },
    // mutations: {
    //     setUser(state, user) {
    //         state.user = {...user}
    //     },
    //     setToken(state, token) {
    //         state.token = token
    //         window.localStorage.setItem('token', token);
    //     },
    //     clearLocalToken(state) {
    //         state.token = null
    //         window.localStorage.removeItem('token')
    //     }
    // },
    // actions: {
    //     logOut({commit}) {
    //         commit('setUser')
    //     },
    //     clearLocalToken({commit}) {
    //         commit('setToken', '') 
    //     },
    //     setUser({commit}, user) {
    //         commit('setUser', user)
    //     },
    //     setToken({commit}, token) {
    //         commit('setToken', token)
    //     },
    // },
    // getters : {
    //     user: state => state.user,
    //     token: state => state.token,
    // }
})