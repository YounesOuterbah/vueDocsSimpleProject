import { createRouter, createWebHashHistory } from "vue-router";
import Landing from "../components/Landing.vue";
import About from "../components/About.vue";

const router = createRouter({
  routes: [
    { path: "/", component: Landing },
    { path: "/about", component: About },
  ],

  history: createWebHashHistory(),
});

export default router;
