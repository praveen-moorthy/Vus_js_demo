import { createApp } from 'vue'
//import App from './App.vue'
import Leave from './Leave.vue'
import router from './router'
//import './assets/main.css'

//createApp(App).mount('#app')
// if we cane to use iported classes add use
createApp(Leave).use(router).mount('#app')