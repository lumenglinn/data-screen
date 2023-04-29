import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// import piniaPluginPersist from 'pinia-plugin-persist'
// import { createPinia } from 'pinia'
// import { ajaxRequest } from '@/common/api/index'

const app = createApp(App)
// const pinia = createPinia()
// pinia.use(piniaPluginPersist)
// app.config.globalProperties.$http = ajaxRequest

app.use(router).mount('#app')