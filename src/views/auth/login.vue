<script setup lang="ts">
import v from '@/plugins/validate'
import utils from '@/utils'

const { yup, useForm, useFields } = v

const schema = {
    account: yup
        .string()
        .required()
        .matches(/^\d{11}|.+@.+$/, '请输入有效的邮箱地址或手机号码')
        .label('账号'),
    password: yup.string().required().min(3, '请设置一个至少包含3个字符的密码').label('密码'),
}

const { handleSubmit, errors, values } = useForm({
    initialValues: {
        account: '',
        password: '',
    },
    validationSchema: schema,
})

useFields(Object.keys(schema))

const onSubmit = handleSubmit(async (values: any) => {
    utils.user.login(values)
})
</script>

<template>
    <form @submit="onSubmit" class="bg-gray-700">
        <div class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
            <div class="p-6 flex flex-col justify-between">
                <div>
                    <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
                    <div class="mt-8">
                        <BmInput v-model="values.account" placeholder="手机/邮箱" />
                        <BmError :error="errors.account" />
                        <BmInput v-model="values.password" class="mt-3" placeholder="密码" />
                        <BmError :error="errors.password" />
                    </div>
                    <bmButton class="w-full mt-5" />
                </div>

                <div class="flex justify-center mt-3">
                    <icon-wechat
                        theme="outline"
                        size="18"
                        fill="#fff"
                        class="bg-green-600 rounded-full p-1 cursor-pointer"
                    />
                </div>
                <div class="flex gap-2 justify-center mt-5">
                    <bmLink />
                </div>
            </div>
            <div class="hidden md:block relative">
                <img src="/images/login.jpg" class="absolute h-full w-full object-cover" />
            </div>
        </div>
    </form>
</template>

<style lang="scss">
form {
    @apply bg-slate-300 h-screen flex justify-center items-center p-5;
}
</style>
