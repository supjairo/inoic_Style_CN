import {createRouter, createWebHistory} from '@ionic/vue-router';
import AppRoutes from "@/router/appRoutes.js";
import AppLayout from "@/layout/AppLayout.vue";

const routes = [
    {
        path: '/',
        redirect: '/app/home'
    }, {
        path: '/:pathMatch(.*)*',
        redirect: AppRoutes[0].path
    }, {
        path: '/app',
        component: AppLayout,
        children: AppRoutes
    }, {
        path: '/login',
        component: () => import('@/views/Public/login.vue')
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
