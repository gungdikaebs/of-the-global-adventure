import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
const app = createApp(App)

app.use(router)

register()
app.mount('#app')
AOS.init()
