import Vue from 'vue'
import App from './App.vue'

import Login from './components/login.vue'
import Register from './components/register.vue';
import Game from './components/game.vue';

Vue.component('log-in', Login)
Vue.component('reg-in', Register)
Vue.component('word-game', Game)

new Vue({
  el: '#app',
  render: h => h(App)
})
