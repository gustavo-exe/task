import { storeTask } from './views/Task/Task.store'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const app = createApp(App)

app.use(router)
app.use(storeTask)

app.component('QuillEditor', QuillEditor)

app.mount('#app')
