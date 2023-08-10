import * as yup from 'yup'

// yup中文提示配置
yup.setLocale({
    mixed: {
        required: '${label}必须输入',
    },
    string: {
        email: '邮箱格式错误',
    },
})
export default yup
