import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import element from './element/index'
Vue.use(element)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
