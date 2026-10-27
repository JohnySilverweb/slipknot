import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import DescriptionPage from '@/pages/DescriptionPage.vue'
import PlayerPage from '@/pages/PlayerPage.vue'
import GalleryPage from '@/pages/GalleryPage.vue'
const routes = [
  {
    path: '/',
    component: HomePage,
  },

  {
    path: '/description',
    component: DescriptionPage,
  },

  {
    path: '/player',
    component: PlayerPage,
  },

  {
    path: '/gallery',
    component: GalleryPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
