import { createRouter, createWebHistory } from "vue-router";
import ACMainPages from "@/views/AC-MainPages";
const routes = [
  {
    path: "/",
    component: ACMainPages,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
