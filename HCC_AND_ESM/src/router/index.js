import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/index.vue";
import DateInfo from "../components/DateInfo.vue";
import DateHome from "../components/DateHome.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
      children: [
        {
        //   name: "home",
          path: "/",
          component: DateHome,
        },
        {
        //   name: "info",
          path: "info",
          component: DateInfo,
        },
      ],
    },
  ],
});

export default router;
