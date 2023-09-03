/**
 * @description: env类型声明
 *
 * @interface ViteEnv,ImportMetaEn,ImportMeta
 */

interface ImportMetaEnv {
    VITE_ROUTER_AUTOLOAD: boolean
    VITE_API_URL: string
    VITE_MOCK_ENABLE: boolean
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
