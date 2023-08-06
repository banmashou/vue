/**
 * @description: 定义接口返回类型
 *
 * @interface RespinseResult
 * @template T
 */
interface RespinseResult<T> {
    code: number
    message: string
    type: 'success' | 'error'
    data: T
}
