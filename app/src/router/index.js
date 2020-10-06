import Vue from 'vue'
import Router from 'vue-router'
import Giris from '@/components/Giris'
import Kaydol from '@/components/Kaydol'
import Anasayfa from '@/components/Anasayfa'
import Paylasim from '@/components/Paylasim'
import Profil from '@/components/Profil'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/giris',
      component: Giris,
    },
    {
      path: '/kaydol',
      component: Kaydol,
    },
    {
      path: '/',
      component: Anasayfa,
      meta: { requiresAuth: true },
      children:[
        { path: '/', component: Paylasim },
        { path: '/profil', component: Profil }
      ]
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("token") == null) {
      next({
        path: "/giris"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;


