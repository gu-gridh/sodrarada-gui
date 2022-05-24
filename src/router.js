import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Archive from "@/views/Archive.vue";
import ImagePage from "@/views/ImagePage.vue";
import PanoramaPage from "@/views/PanoramaPage.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/archive",
    component: Archive,
  },
  {
    path: "/image/:id",
    component: ImagePage,
    props: {
      imageType: "image",
    },
  },
  {
    path: "/panorama/:id",
    component: ImagePage,
    props: {
      imageType: "panorama",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
