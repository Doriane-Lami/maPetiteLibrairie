import { createRouter, createWebHistory } from "vue-router";
import ListeLivre from "@/components/ListeLivre.vue";
import StockView from "@/components/StockView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // Associe des chemins d'accès au composant vue à afficher
    routes: [
        {
            path: "/livres",
            name: "livres",
            component: ListeLivre,
        },
        {
            path: "/stock",
            name: "stock",
            component: StockView,
        },
    ],
});

export default router;