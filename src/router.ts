import Vue from "vue";
import Router from "vue-router";
import { Message } from "element-ui";

Vue.use(Router);

const router = new Router({
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
      path: "/NotFound",
      name: "NotFound",
      component: () =>
        import(/* webpackChunkName: "notFound" */ "./views/NotFound.vue")
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
    },
    {
      path: "*",
      redirect: "/NotFound"
    },
  ]
});

router.beforeEach((to, from, next) => {
  console.log('to: ', to, 'from: ', from)
  const toPath = to.path;

  if(toPath !== '/' && toPath !== '/Login' && toPath !== '/Register') {
    const token = localStorage.getItem('token');
    if(!token) {
      Message({
        type: 'warning',
        message: '您还没有登录，请登录！'
      });
      next('/Login');
    } else {
      next();
    }
  } else {
    next();
  }

})

export default router;
