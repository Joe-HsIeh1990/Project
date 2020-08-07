// vue
import Vue from 'vue'
import App from './App.vue'

// vuex
import Vuex from 'vuex'
import store from './store'

// vue-router
import router from './router'
// import Router from 'vue-router'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// 動畫套件
import AOS from 'aos'
import 'aos/dist/aos.css'

// vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// bootstrap
import 'bootstrap'

// vee-validata
import { ValidationProvider, extend, localize, configure } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import * as rules from 'vee-validate/dist/rules'
import TW, { messages } from 'vee-validate/dist/locale/zh_TW.json'

localize('zh_TW', TW)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('Newrol', ValidationProvider)
axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.component('Loading', Loading)
Vue.use(Vuex)
// Vue.filter('currency', currencyFilter)
// Vue.filter('timecurrency', timeFilter)
library.add(fab, far, fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// vee-validate
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
})
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})
extend('email', email)
extend('required', {
  ...required,
  message: '請輸入{_field_}'
})
extend('name', {
  validate (value, name) {
    return value.length >= name.length && /[\u4e00-\u9fa5]/.test(value)
  },
  params: ['length'],
  message: '請輸入正確中文姓名，至少大於2'
})
extend('phone', {
  validate (value) {
    return value.length === 10 && /^((09)[0-9]{1}\d{7})$/.test(value)
  },
  params: ['length'],
  message: '請輸入正確手機號碼10位數，例:0912345678'
})
extend('addres', {
  validate (value, addres) {
    return value.length >= addres.length && /[\u4e00-\u9fa5]/.test(value)
  },
  params: ['length'],
  message: '請用中文輸入正確地址，如:台北市信義區'
})
extend('cardnum', {
  validate (value) {
    return value.length === 16 && /\d/.test(value)
  },
  params: ['length'],
  message: '請輸入16位數阿拉伯數字'
})
extend('carddate', {
  validate (value) {
    return value.length === 4 && /\d/.test(value)
  },
  params: ['length'],
  message: '請輸入4位數有效期間'
})
extend('pay', {
  validate (value) {
    return value.length === 3 && /\d/.test(value)
  },
  params: ['length'],
  message: '請輸入3位數背後安全碼'
})
extend('coupones', {
  validate (value) {
    return value.length === 3 && /\d/.test(value)
  },
  params: ['length'],
  message: '請輸入3位數優惠碼'
})
configure({
  classes: {
    valid: 'valid',
    invalid: 'invalid'
  }
})

new Vue({
  created () {
    AOS.init(
      {
        duration: 3000,
        mirror: false
      }
    )
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
