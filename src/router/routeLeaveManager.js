import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/leaveViews/home.vue'
import leaveRequest from '@/leaveViews/leaverequest.vue'
import Report from '@/leaveViews/report.vue'
import Config from '@/leaveViews/configuration.vue'
import Userguide from '@/leaveViews/userGuide.vue'

import NotFound from '@/views/notfound.vue'


const routes = [{
        path: "/",
        name: "home",
        component: Home
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