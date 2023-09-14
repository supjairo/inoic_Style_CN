import {defineStore} from "pinia";

export const useAppSystemStore = defineStore('store', {
    state: () => ({
        // 底部导航栏列表
        navBarList: [{
            name: '首页',
            path: '/app/home',
            icon: 'home',
            component: () => import('../views/Modules/Home/index.vue'),
        }, {
            name: '相册',
            path: "app/photo",
            icon: 'photo',
            component: () => import('../views/Modules/Photo/index.vue'),
        }, {
            name: '消息',
            path: "app/message",
            icon: 'message',
            component: () => import('../views/Modules/Message/index.vue'),
        }, {
            name: '我的',
            path: "app/mine",
            icon: 'mine',
            component: () => import('../views/Modules/Mine/index.vue'),
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
