import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import { setupMockPlugin } from './mock'
import { setupElementPlugin } from './element'
export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
    const plugins: Plugin[] = [vue()]

    plugins.push(setupMockPlugin(isBuild))

    setupElementPlugin(plugins)
    return plugins
}
