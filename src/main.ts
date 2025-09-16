import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query'
import { queryClient } from './services/tanstack-query/query-client'

import App from './App.vue'
import router from './router'

import './index.css'

const app = createApp(App)

const vueQueryOptions: VueQueryPluginOptions = {
  queryClient,
}
app.use(VueQueryPlugin, vueQueryOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')
