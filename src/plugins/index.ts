import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import _ from 'lodash'

/**
 * @module 插件工具
 * @export tailwindcss
 * @param {App} app
 */
export function setupPlugins(app: App) {
    autoRegisterComponent(app)
    setupTailwindcss()
}

/**
 * @module 自动注册组件
 *
 * @param {App} app
 */
function autoRegisterComponent(app: App) {
    const components: Record<string, any> = import.meta.glob('../components/form/*.vue', { eager: true })
    Object.keys(components).forEach((key) => {
        const name = key.split('/').pop()?.split('.').shift() as string
        app.component(_.camelCase(name), components[key].default)
    })
}
