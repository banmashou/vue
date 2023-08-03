import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './vite/alias'
import { parseEnv } from './vite/util'

export default ({ command, mode }: ConfigEnv) => {
    const isBuild = command === 'build'
    const root = process.cwd()
    const env = parseEnv(loadEnv(mode, root))
    console.log(typeof env.VITE_SOME_KEY)
    return {
        plugins: [vue()],
        // 路径别名
        resolve: {
            alias,
        },
    }
}
