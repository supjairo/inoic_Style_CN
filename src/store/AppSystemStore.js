import {defineStore} from "pinia";

export const useAppSystemStore = defineStore('store', {
    state: () => ({
        // 底部导航栏列表
        navBarList: [{
            name: '首页',
            path: '/app/home',
            icon: 'home',
            component: () => import('@/views/app/home/index.vue'),
        }, {
            name: '相册',
            path: "app/photo",
            icon: 'photo',
            component: () => import('@/views/app/photo/index.vue'),
        }, {
            name: '消息',
            path: "app/message",
            icon: 'message',
            component: () => import('@/views/app/message/index.vue'),
        }, {
            name: '我的',
            path: "app/mine",
            icon: 'mine',
            component: () => import('@/views/app/mine/index.vue'),
        }]
    }),
    getters: {
        getNavBarList() {
            return this.navBarList
        }
    },
    actions: {
        setNavBarList(list) {
            this.navBarList = list
        }
    }
})
