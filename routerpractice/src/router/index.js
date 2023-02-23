import { createRouter, createWebHistory } from "vue-router";
import FirstComponent from "../components/FirstComponent.vue";
import SecondComponent from "../components/SecondComponent.vue";
import ThirdComponent from "../components/ThirdComponent.vue";

const routes = [
  { path: "/1", component: FirstComponent },
  { path: "/2", component: SecondComponent },
  { path: "/2/:title", component: SecondComponent },
  { path: "/3", component: ThirdComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
