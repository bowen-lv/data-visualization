import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import router from './router';
import App from './App.vue'
const store = createPinia()
const app = createApp(App)
app.use(store).use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
