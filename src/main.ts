import { storeTask } from './views/Task/Task.store'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(storeTask)

app.mount('#app')
