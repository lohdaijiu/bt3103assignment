import About from "../views/About.vue"
import Home from "../views/Home.vue"
import Login from "../components/Login.vue"
import NotFound from "../views/NotFound.vue"
import OnlyProfits from "../views/OnlyProfit.vue"
import Profile from "../views/Profile.vue"

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path : '/home',
            name : "Home",
            component: Home,
        },
        {
            path : '/',
            name : "Login",
            component : Login
        },
        {
            path : '/about',
            name : "About",
            component : About
        },
        {
            path : '/:catchAll(.*)',
            name : "NotFound",
            component : NotFound
        },
        {
            path : '/onlyprofit',
            name : "OnlyProfit",
            component : OnlyProfits
        },
        {
            path : '/profile',
            name : "Profile",
            component : Profile
        },
    ]
})

export default router;