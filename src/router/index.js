import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import('../views/login.vue')
    },
    {
        path: '/zq',
        name: 'zq',
        component: () =>
            import('../views/zq.vue')
    },
    {
        path: '/zy',
        name: 'zy',
        component: () =>
            import('../views/zy.vue')
    },
    {
        path: '/zdy',
        name: 'zdy',
        component: () =>
            import('../views/zdy.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem("token");
    if (token || to.path === "/login" || to.path === "/zdy") { 
        next() 
    } else { 
        next("/login") 
    }
})

export default router