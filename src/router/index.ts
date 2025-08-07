import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DiaryDetail from "../views/DiaryDetail.vue";
import DiaryEdit from "../views/DiaryEdit.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/diary/:id", component: DiaryDetail },
  { path: "/edit/:id", component: DiaryEdit },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
