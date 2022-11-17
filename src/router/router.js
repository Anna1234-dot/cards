import { createWebHistory, createRouter } from "vue-router";
import CatalogPage from "@/components/CatalogPage.vue";
import CardDetail from "@/components/CardDetail";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/detail/:id',
            props: true,
            name: 'detail',
            component: CardDetail,
        },
        {
            path: '/',
            component: CatalogPage,
        }
    ]
})