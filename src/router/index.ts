import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/MainLayout.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "first-challenge",
          name: "first-challenge",
          component: () => import("../views/FirstView.vue"),
        },
        {
          path: "second-challenge",
          name: "second-challenge",
          component: () => import("../views/SecondView.vue"),
        },
        {
          path: "third-challenge",
          name: "third-challenge",
          component: () => import("../views/ThirdView.vue"),
        },
      ],
    },
    {
      path: "/third-challenge/showcase",
      name: "third-challenge-showcase",
      component: () => import("../views/ShowcaseView.vue"),
      meta: { layout: "blank" },
    },
  ],
});

export default router;
