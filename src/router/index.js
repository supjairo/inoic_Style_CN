import {createRouter, createWebHistory} from '@ionic/vue-router';
import AppRoutes from "@/router/appRoutes.js";

const routes = [
    {
        path: '/',
        redirect: AppRoutes[0].path
    }, {
        path: '/:pathMatch(.*)*',
        redirect: AppRoutes[0].path
    }, {
        path: '/home',
        component: () => import('@/views/Modules/Home/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
