import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home";
import ShipDetails from "./views/ShipDetails";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
        path: '/ships/:name',
        name: 'ShipDetails', 
        component: ShipDetails
    }
  ]
});
