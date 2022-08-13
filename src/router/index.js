import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage";
import FaqPage from "@/pages/FaqPage";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/faq',
        name: 'faq',
        component: FaqPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
    },
});

export default router;
