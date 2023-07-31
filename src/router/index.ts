import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import layoutRoutes from './autoload'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...routes, ...layoutRoutes],
})

export function setupRouter(app: App) {
    app.use(router)
}

export default router
