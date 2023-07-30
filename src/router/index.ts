import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export function setupRouter(app: App) {
    app.use(router)
}

export default router
