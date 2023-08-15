<script setup lang="ts">
interface IMenuItem {
    title: string
    icon?: string
    active?: boolean
}

interface IMenu extends IMenuItem {
    children?: IMenuItem[]
}

const menus = [
    {
        title: '错误页面',
        icon: 'fas fa-angle-down',
        active: true,
        children: [{ title: '404错误', active: true }, { title: '500错误' }],
    },
    {
        title: '编辑器',
        icon: 'fas fa-angle-down',
        children: [{ title: 'markdown编辑器' }, { title: '富文本编辑器' }],
    },
] as IMenu[]
</script>

<template>
    <div class="admin h-screen w-screen flex">
        <div class="menu w-[200px] bg-gray-800 p-4">
            <div class="logo text-gray-300 flex items-center">
                <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
                <span class="text-md">斑马兽</span>
            </div>

            <!-- 菜单 -->
            <div class="left-container">
                <dl v-for="(menu, index) of menus" :key="index">
                    <dt>
                        <section>
                            <i class="fab fa-behance-square"></i>
                            <span class="text-md">{{ menu.title }}</span>
                        </section>
                        <section>
                            <i class="fas fa-angle-down"></i>
                        </section>
                    </dt>
                    <dd
                        v-show="menu.active"
                        :class="{ active: cmenu.active }"
                        v-for="(cmenu, key) of menu.children"
                        :key="key"
                    >
                        {{ cmenu.title }}
                    </dd>
                </dl>
            </div>
        </div>
        <div class="content flex-1 bg-gray-200">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss">
.admin {
    .left-container {
        dl {
            @apply text-gray-300 text-sm;
            dt {
                @apply text-sm mt-6 flex justify-between cursor-pointer items-center;
                section {
                    @apply flex items-center;
                    i {
                        @apply mr-2 text-sm;
                    }
                }
            }
            dd {
                @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-300;
                &.active {
                    @apply bg-violet-700 hover:bg-violet-500;
                }
            }
        }
    }
}
</style>

<script lang="ts">
export default {
    route: { meta: { auth: true } },
}
</script>
