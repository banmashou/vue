import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'

/**
 * @module 插件工具
 * @export tailwindcss
 * @param {App} app
 */
export function setupPlugins(app: App) {
    setupTailwindcss()
}
