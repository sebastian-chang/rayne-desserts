import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Flavors from '../views/Flavors.vue'
import Weddings from '../views/Weddings.vue'
import Gallery from '../views/Gallery.vue'
import Reviews from '../views/Reviews.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/flavors',
    name: 'Flavors',
    component: Flavors,
  },
  {
    path: '/weddings',
    name: 'Weddings',
    component: Weddings,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
