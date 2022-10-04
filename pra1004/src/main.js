import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'

Vue.config.productionTip = false
Vue.component('HeaderComp', HeaderComp)
Vue.component('FooterComp', FooterComp)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
