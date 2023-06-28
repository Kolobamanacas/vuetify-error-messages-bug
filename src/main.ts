import { createApp } from 'vue'
import App from './App.vue'

import { createVuetify } from 'vuetify'
import { VTextField } from 'vuetify/components'

const app = createApp(App)
const vuetify = createVuetify({ components: { VTextField } })

app.use(vuetify)
app.mount('#app')
