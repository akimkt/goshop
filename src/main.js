import Vue from 'vue'
import App from './App'
// 引入请求模块
import request from './utils/request'
Vue.config.productionTip = false

App.mpType = 'app'
// 给请求模块传入参数，例如bseURL
const requestConfig = request({baseURL:'https://ugo.botue.com'})
// 全局注册插件
Vue.use(requestConfig)
const app = new Vue({
  ...App
})
app.$mount()
