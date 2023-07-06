import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Images from "../views/Images.vue";
import Blog from "../views/Blog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/images",
      component: Images,
      name: "images",
    },
    {
      path: "/blog",
      component: Blog,
      name: "blog",
    },
  ],
});

export default router;
