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
        build: {
            rollupOptions: {
                emptyOutDir: true,
                output: {
                    manualChunks(id: string) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString()
                        }
                    },
                },
            },
        },
        server: {
            host: '127.0.0.1',
            port: 3000,
            proxy: {
                '/api': {
                    //将/api访问转换为target
                    target: env.VITE_API_URL,
                    //跨域请求携带cookie
                    changeOrigin: true,
                    //url 重写删除`/api`
                    rewrite: (path: string) => path.replace(/^\/api/, ''),
                },
            },
        },
    }
}
