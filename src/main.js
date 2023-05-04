import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import echarts from './common/echarts.js'
import { echartsSize } from './common/utils.js'
import 'animate.css';
// import piniaPluginPersist from 'pinia-plugin-persist'
// import { createPinia } from 'pinia'
// import { ajaxRequest } from '@/common/api/index'

const app = createApp(App)
// const pinia = createPinia()
// pinia.use(piniaPluginPersist)
// app.config.globalProperties.$http = ajaxRequest
app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$echartsSize = echartsSize


app.use(router).mount('#app')
