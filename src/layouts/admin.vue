<script setup lang="ts"></script>

<template>
    <div class="admin h-screen w-screen flex">
        <div class="menu w-[200px] bg-gray-800 p-4">
            <div class="logo text-gray-300 flex items-center">
                <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
                <span class="text-md">斑马兽</span>
            </div>

            <!-- 菜单 -->
            <div class="left-container">
                <dl>
                    <dt>
                        <section>
                            <i class="fab fa-behance-square"></i>
                            <span class="text-md">错误页面</span>
                        </section>
                        <section>
                            <i class="fas fa-angle-down"></i>
                        </section>
                    </dt>
                    <dd class="active">404错误</dd>
                    <dd class="">500错误</dd>
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
