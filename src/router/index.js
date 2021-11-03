import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Tiendaapp" */ '../views/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Tiendaapp" */ '../views/register.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import(/* webpackChunkName: "Tiendaapp" */ '../views/productos.vue')
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import(/* webpackChunkName: "Tiendaapp" */ '../views/clientes.vue')
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: () => import(/* webpackChunkName: "Tiendaapp" */ '../views/ventas.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import(/* webpackChunkName: "Tiendaapp" */ '../views/usuarios.vue')
  }
]

// Urls permitidas para usuarios no logueados:
const notLoginUrls = ['Login', 'Register']
// Urls permitidas para usuarios logueados:
const LoginUrls = ['Productos', 'Clientes', 'Ventas', 'Usuarios']

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (notLoginUrls.includes(to.name) && localStorage.access != null) {
    window.location.href = ('/')
  }
  if (LoginUrls.includes(to.name) && localStorage.access == null) {
    window.location.href = ('/')
  }
  next()
})

export default router
