import Vue from 'vue'
import Router from 'vue-router'
import Giris from '@/components/Giris'
import Kaydol from '@/components/Kaydol'
import Anasayfa from '@/components/Anasayfa'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'giris',
      component: Giris,
    },
    {
      path: '/kaydol',
      name: 'kaydol',
      component: Kaydol,
    },
    {
      path: '/anasayfa',
      name: 'anasayfa',
      component: Anasayfa,
      meta: {xx: true},
    }
  ],
});

var isim = 'murat'

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.xx)) {
    if (isim==='murat') {
      next();
    } else {
      next({ path: '/' });
    }
  }
  next();
});

export default router;


