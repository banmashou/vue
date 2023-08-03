import { ConfigEnv, loadEnv } from 'vite'
import alias from './vite/alias'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'

export default ({ command, mode }: ConfigEnv) => {
    const isBuild = command === 'build'
    const root = process.cwd()
    const env = parseEnv(loadEnv(mode, root))
    console.log(typeof env.VITE_SOME_KEY)
    return {
        // plugins: [vue()],
        plugins: setupPlugins(isBuild, env),
        // 路径别名
        resolve: {
            alias,
        },
    }
}
