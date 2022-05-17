import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from '../views/Menu.vue'
import Flavors from '../views/Flavors.vue'
import Weddings from '../views/Weddings.vue'
import Desserts from '../views/Desserts.vue'
import Gallery from '../views/Gallery.vue'
import Reviews from '../views/Reviews.vue'
import Contact from '../views/Contact.vue'
import FAQ from '../views/FAQ.vue'
import Product from '../views/Product.vue'
import CakeTastings from '../views/CakeTastings.vue'

import AdminSections from '../views/Admin/sections.vue'
import AdminLogin from '../views/Admin/Login.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu/:cat",
    name: "Menu",
    component: Menu,
    props: true,
  },
  {
    path: "/products/:slug",
    name: "Product",
    component: Product,
    props: true,
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
    path: '/desserts',
    name: 'Desserts',
    component: Desserts,
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
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
  },
  {
    path: '/tastings',
    name: 'Cake Tastings',
    component: CakeTastings,
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
  {
    path: "/instagram",
    name: "Instagram",
    beforeEnter () { window.open('https://www.instagram.com/raynedesserts/', '_blank') },
    component: Home,
  },
  {
    path: "/facebook",
    name: "Facebook",
    beforeEnter () { window.open('https://www.facebook.com/raynedesserts/', '_blank') },
    component: Home,
  },
  {
    path: "/youtube",
    name: "Youtube",
    beforeEnter () { window.open('https://www.youtube.com/raynedesserts/', '_blank') },
    component: Home,
  },
  {
    path: "/wedding-wire",
    name: "WeddingWire",
    beforeEnter () { window.open('https://www.weddingwire.com/biz/rayne-desserts/e0568849f5677f01.html', '_blank') },
    component: Home,
  },
  {
    path: "/phone",
    name: "Phone",
    beforeEnter () { location.href = ('tel:' + process.env.VUE_APP_PHONE) },
    component: Contact,
  },
  {
    path: "/email",
    name: "Email",
    beforeEnter () { location.href = ('mailTo:' + process.env.VUE_APP_EMAIL) },
    component: Contact,
  },
  {
    path: "/address",
    name: "Address",
    beforeEnter () { window.open(process.env.VUE_APP_GOOGLE_LOCATION, '_blank') },
    component: Contact,
  },
  // ADMIN
  {
    path: '/admin/login',
    name: 'Admin-Login',
    component:AdminLogin,
  },
  {
    path: '/admin/sections',
    name: 'Admin-Sections',
    component: AdminSections
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return { left: 0, top: 0, }
  },
});

export default router;
