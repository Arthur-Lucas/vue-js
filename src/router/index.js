import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/skilltest",
      name: "skill-test",
      component: () => import("../views/SkillTestView.vue"),
    },
    {
      path: "/chrono",
      name: "chrono",
      component: () => import("../views/ChronoView.vue"),
    },
  ],
});

export default router;
