const AppRoutes = [{
    path: 'home', component: () => import('../views/Modules/Home/index.vue'),
}, {
    path: "photo", component: () => import('../views/Modules/Photo/index.vue'),
}, {
    path: "message", component: () => import('../views/Modules/Message/index.vue'),
}, {
    path: "mine", component: () => import('../views/Modules/Mine/index.vue'),
}]

export default AppRoutes;
