import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/Login"
    },
    {
      path: "/Login",
      name: "Login",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/Register",
      name: "Register",
      component: () =>
        import(/* webpackChunkName: "register" */ "./views/Register.vue")
    },
    {
      path: "/Common",
      name: "Common",
      component: resolve => require(["./layouts/Common.vue"], resolve),
      children: [
        {
          path: "/About",
          name: "About",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
          path: "/CrudDemo",
          name: "CrudDemo",
          component: () =>
            import(/* webpackChunkName: "crudDemo" */ "./views/CrudDemo.vue")
        }
      ]
    }
  ]
});
