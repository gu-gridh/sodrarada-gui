import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Archive from "@/views/Archive.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/archive", component: Archive },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
