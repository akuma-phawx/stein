import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import SignUp from "../components/SignUp.vue";
import IndexContent from "../components/IndexContent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "IndexContent",
    component: IndexContent,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
