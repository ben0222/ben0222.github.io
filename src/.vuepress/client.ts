import { defineClientConfig } from '@vuepress/client'
// 全量引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 手动引入自己封装好的组件
import layout from './components/layout.vue'
export default defineClientConfig({
    enhance({ app }) {
        // 注册element-plus
        app.use(ElementPlus)
        // 注册组件
        app.component('layout', layout)
    },
})
