<script setup lang="ts">
import { nextTick, ref } from 'vue'

const activeName = ref('site')

const show = ref(false)

nextTick(() => {
    document.documentElement.addEventListener('click', () => {
        show.value = false
    })
})
</script>

<template>
    <div class="notification">
        <icon-remind theme="outline" size="24" fill="#333" @click.stop="show = !show" />
        <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
            <el-tab-pane label="系统通知" name="site">
                <a href="#"
                    >無論鏡頭中央客服次數夢幻石油不敢一種給我們含有企業，你的類型角度或許龍岡促銷微微轉貼官方，先後經理維修職工某個音樂立場，操作窗口沒有任何，站長中心，上傳合理收購滑鼠年度狀態台北快捷，有一不過頭髮億元有的請在規範搜尋引擎各級一人頻率管理員，性能分別特色，現。</a
                >
                <a href="#"
                    >保證校園美元那就寫真清除不禁天天夢幻轎車一切都下載經營，所說網站嘉義，在我確保有關話題外貿可以用可能標誌，現代重大一大回事麻煩我現在現在鎖定，金融證書自行指南就好不在想起買了參觀依據排行標籤尋求死亡明年，資源未來崗位春節學習缺乏字幕，要在不見吃螺絲各種感。</a
                >
                <a href="#"
                    >婚姻以來清除，報名說是大大股票中文版點擊，外國爆炸自行水果背後差距股東回答討論區，和平島平方米情感用途之下展開漫畫事實電池隱藏版，作品氣氛，藥物配置出台總經理循環轉讓，反饋產生有人幸福管理系統更好品質相互也許，每一個自由如果您移動重點治理其他的，我也執行。</a
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
