import { createRouter, createWebHistory } from "vue-router"
import TheDesign from "./views/TheDesign.vue"

const routes = [{ path: "/", component: TheDesign }]

export default createRouter({
  history: createWebHistory(),
  routes,
})
