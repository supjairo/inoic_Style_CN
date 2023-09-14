const AppRoutes = [{
    path: 'home', component: () => import('../views/app/home/index.vue'),
}, {
    path: "photo", component: () => import('../views/app/photo/index.vue'),
}, {
    path: "message", component: () => import('../views/app/message/index.vue'),
}, {
    path: "mine", component: () => import('../views/app/mine/index.vue'),
}]

export default AppRoutes;
