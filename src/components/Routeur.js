import { createRouter, createWebHistory } from "vue-router";
import ListeLivre from "./ListeLivre.vue";
import StockView from "./StockView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

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
