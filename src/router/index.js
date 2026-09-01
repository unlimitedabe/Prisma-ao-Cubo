import { createRouter, createWebHistory } from 'vue-router'

// importar as views
// import Home from '@/views/Home.vue'
import Servicos from '/src/views/Servicos.vue'
import Sobre from '/src/views/Sobre.vue'

const routes = [
  {
    path: '/',
    name: 'Sobre',
    component: Sobre,
  },
  {
    path: '/serviços',
    name: 'Servicos',
    component: Servicos,
  },
  // redirecionamentos
  {
    path: '/sobre',
    redirect: '/',
  },
  {
    path: '/servicos',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
