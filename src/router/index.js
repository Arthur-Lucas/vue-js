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
      path: "/docs",
      name: "rtfm",
      component: () => import("../views/DocsView.vue"),
    },
  ],
});

export default router;
