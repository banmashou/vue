/**
 * @description: env类型声明
 *
 * @interface ViteEnv,ImportMetaEn,ImportMeta
 */

interface ViteEnv {
    VITE_SOME_KEY: number
    VITE_ROUTE_AUTOLOAD: boolean
    VITE_API_URL: string
}

interface ImportMetaEnv extends ViteEnv {}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
