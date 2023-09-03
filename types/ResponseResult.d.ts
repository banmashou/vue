/**
 * @description: 定义接口返回类型声明
 *
 * @interface RespinseResult
 * @template T
 */
interface RespinseResult<T> {
    code: number
    message: string
    status: 'success' | 'error'
    data: T
}
