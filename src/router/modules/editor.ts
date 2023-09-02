import { RouteRecordRaw } from 'vue-router'
export default {
    name: 'editor',
    path: '/editor',
    component: () => import('@/layouts/admin.vue'),
    meta: { auth: true, menu: { title: '编辑器', icon: 'fas fa-baseball-ball' } },
    children: [
        {
            name: 'wang',
            path: 'wang',
            component: () => import('@/views/editor/wangEditor.vue'),
            meta: { permission: 'wang_editor', menu: { title: '富文本编辑器' } },
        },
        {
            name: 'markdown',
            path: 'markdown',
            component: () => import('@/views/editor/markdownEditor.vue'),
            meta: { permission: 'markdown_editor', menu: { title: 'Markdown' } },
        },
    ],
} as RouteRecordRaw
