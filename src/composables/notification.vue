<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('site')

const show = ref(false)
</script>

<template>
    <div class="notification">
        <i class="fas fa-align-justify" @click="show = !show"></i>
        <el-tabs v-model="activeName" class="lists" v-show="show">
            <el-tab-pane label="系统通知" name="site">
                <a href=""
                    >天氣身邊石油的確將軍考慮，準備以外一切性感傳說責任發生低價官員一段產品演出先後版主，不必專欄婚姻，義務旁邊行政獎勵之處生意人生它的哪個方法員工，客人代理畢業網際遊客我和今天風景，人力桌面許可把我給他減少歷史苗栗幾天角色我一富岡，最終謝謝，明星聽到收入，好。</a
                >
                <a href=""
                    >天氣身邊石油的確將軍考慮，準備以外一切性感傳說責任發生低價官員一段產品演出先後版主，不必專欄婚姻，義務旁邊行政獎勵之處生意人生它的哪個方法員工，客人代理畢業網際遊客我和今天風景，人力桌面許可把我給他減少歷史苗栗幾天角色我一富岡，最終謝謝，明星聽到收入，好。</a
                >
                <a href=""
                    >天氣身邊石油的確將軍考慮，準備以外一切性感傳說責任發生低價官員一段產品演出先後版主，不必專欄婚姻，義務旁邊行政獎勵之處生意人生它的哪個方法員工，客人代理畢業網際遊客我和今天風景，人力桌面許可把我給他減少歷史苗栗幾天角色我一富岡，最終謝謝，明星聽到收入，好。</a
                >
            </el-tab-pane>
            <el-tab-pane label="站内通知" name="message">Config</el-tab-pane>
        </el-tabs>
    </div>
</template>

<style lang="scss">
.notification {
    @apply relative;
    .lists {
        @apply absolute bg-white px-3 py-2 border rounded-md shadow-md right-[-60px] z-10 w-[300px] text-sm;
        a {
            @apply truncate overflow-hidden block border-b pb-2 my-2 hover:text-violet-600;
        }
    }
}
</style>
