import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import MasonryWall from "@yeger/vue-masonry-wall";

createApp(App) //
  .use(router)
  .use(createPinia())
  .use(MasonryWall)
  .mount("#app");
