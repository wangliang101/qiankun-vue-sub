import { createRouter, createWebHashHistory} from 'vue-router';
import Home from '../pages/home';
import About from '../pages/about';

const router = createRouter({
  history: createWebHashHistory(window.__POWERED_BY_QIANKUN__ ? '/vue' : '/'),
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About}
  ]
})

export default router