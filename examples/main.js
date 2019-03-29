import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import LUI from '../packages/index'
Vue.config.productionTip = false

Vue.component('demo-block', demoBlock)
Vue.use(LUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
