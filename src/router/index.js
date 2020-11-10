import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/Simple",
    component: () =>
      import(/* webpackChunkName: "Simple" */ "../layouts/LayoutSimple.vue"),
    redirect: "/login",
    children: [
      {
        path: "/login",
        name: "login",
        alias: "/login",
        component: () =>
          import(/* webpackChunkName: "Login" */ "../views/Login.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
