import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import todo from './components/todo'
import home from './components/home'
import game from './components/game'
import music from './components/music'
Vue.use(VueRouter)

const User = {
  template: `<div>User {{ $route.params.id }}</div>`
}
const router = new VueRouter({
	routes: [
	  {path: '/', redirect: '/home'},
	  {path: '/music', component: music},
	  {path: '/home' , component: home},
	  {path: '/todo', component: todo},
	  {path: '/game', component: game}
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
