import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import StandingsTable from "./views/StandingsTable";

import { competitions } from "./constants/index";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/404",
      name: "not-found",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      path: "/:webslug",
      name: "standings-table",
      component: StandingsTable,
      beforeEnter: (to, from, next) => {
        const competition = Object.values(competitions).find(
          item => item.webslug === to.params.webslug
        );
        if (competition) {
          to.meta.competition = competition;
          next();
        } else {
          next("/404");
        }
      }
    }
  ]
});
