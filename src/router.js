import Vue from 'vue';
import Router from 'vue-router';
import LayoutDefault from "./layouts/LayoutDefault";

const Home = () => import(`./views/Home.vue`);
const About = () => import(`./views/About.vue`);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: `/`,
      name: `home`,
      component: Home,
      meta: { layout: LayoutDefault }
    },
    {
      path: `/about`,
      name: `about`,
      component: About,
      meta: { layout: LayoutDefault }
    },
  ],
  mode: `history`,
});
