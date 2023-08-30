import { ConfigEnv, loadEnv } from 'vite'
import alias from './vite/alias'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'
import { visualizer } from 'rollup-plugin-visualizer'

export default ({ command, mode }: ConfigEnv) => {
    const isBuild = command === 'build'
    const root = process.cwd()
    const env = parseEnv(loadEnv(mode, root))
    return {
        // plugins: [vue()],
        plugins: [...setupPlugins(isBuild, env), visualizer()],
        // 路径别名
        resolve: {
            alias,
        },
        server: {
            port: 3000,
        },
    }
}
