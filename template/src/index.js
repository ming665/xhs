
import Launcher from '@xhs/launcher'
import App from './App.vue'
// application configs
{{#vuex}}
import storePlugin from '@xhs/launcher-plugin-store'
{{/vuex}}
import httpConfig from './config/http.config'
import routesConfig from './config/routes.config'

{{#vuex}}
import storesConfig from './config/stores.config'
{{/vuex}}

const app = new Launcher('#app', {
  routes: routesConfig.routes,
  http: httpConfig,
})
{{#storePlugin}}
app.use(storePlugin, storesConfig)
{{/storePlugin}}

app.start(App)


export default app
