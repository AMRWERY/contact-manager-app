import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router.js'

import "bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(store).use(router).mount('#app')
