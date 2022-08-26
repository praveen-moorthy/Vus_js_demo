import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import About from '@/views/about.vue'
import User from '@/views/user.vue'
import ShopingList from '@/views/shoping-list.vue'
import NotFound from '@/views/notfound.vue'

import Leavehome from '@/leaveViews/home.vue'
import leaveRequest from '@/leaveViews/leaverequest.vue'
import Report from '@/leaveViews/report.vue'
import Config from '@/leaveViews/configuration.vue'
import Userguide from '@/leaveViews/userGuide.vue'


const routes = [{
        path: "/",
        name: "Leavehome",
        component: Leavehome
    }, {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/contact",
        name: "Contact",
        component: About
    },
    {
        path: "/user/:name",
        name: "User",
        component: User,
        props: true,
    },
    {
        path: "/shoping-list",
        name: "shoping-list",
        component: ShopingList
    },
    {
        path: "/leavehome",
        name: "leavehome",
        component: Leavehome
    },
    {
        path: "/leaverequest",
        name: "leaverequest",
        component: leaveRequest
    },
    {
        path: "/report",
        name: "report",
        component: Report
    },
    {
        path: "/config",
        name: "config",
        component: Config
    },
    {
        path: "/user-guide",
        name: "user-guide",
        component: Userguide
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;