import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
// import './assets/uni'
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
