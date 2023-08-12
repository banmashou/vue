<script setup lang="ts">
import userApi from '@/apis/userApi'
import v from '@/plugins/validate'
import { store } from '@/utils'

const { Form, Field, ErrorMessage } = v

// const schema = v.yup.object({
//     account: v.yup.string().required().email(),
//     password: v.yup.string().required().min(3),
// })

const schema = {
    account: { required: true, email: true },
    password: { required: true, min: 3 },
}
const onSubmit = async (values: any) => {
    const {
        data: { token },
    } = await userApi.login(values)
    store.set('token', {
        expire: 100,
        token,
    })
}
</script>

<template>
    <Form @submit="onSubmit" :validation-schema="schema" class="bg-gray-700">
        <div
            class="w-[720px] translate-y-32 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
        >
            <div class="p-6 flex flex-col justify-between">
                <div>
                    <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
                    <div class="mt-8">
                        <Field
                            name="account"
                            placeholder="请输入手机号或邮箱"
                            value="banmashou@sina.com"
                            class="bm-input"
                            :validate-on-input="true"
                            label="账号"
                        />
                        <ErrorMessage name="account" as="div" class="bm-error" />
                        <Field
                            type="password"
                            name="password"
                            value="admin888"
                            placeholder="请输入登录密码"
                            class="bm-input mt-3"
                            :validate-on-input="true"
                            label="密码"
                        />
                        <ErrorMessage name="password" as="div" class="bm-error" />
                        <!-- <bmInput v-model="form.account" placeholder="请输入手机号或邮箱" />
                    <bmInput v-model="form.password" placeholder="请输入登录密码" class="mt-3" /> -->
                    </div>
                    <bmButton class="mt-5" />
                </div>

                <div class="flex justify-center mt-3">
                    <i class="fa-brands fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer"></i>
                </div>
                <div class="flex gap-2 justify-center mt-5">
                    <bmLink />
                </div>
            </div>
            <div class="hidden md:block relative">
                <img src="/images/login.jpg" class="absolute h-full w-full object-cover" />
            </div>
        </div>
    </Form>
</template>

<style lang="scss">
form {
    @apply bg-slate-300 h-screen flex justify-center items-center p-5;
}
</style>
