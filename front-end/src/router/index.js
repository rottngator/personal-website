import { createRouter, createWebHistory } from 'vue-router'
import ContentPage from '../pages/ContentPage.vue'
import HomePage from '../pages/home/HomePage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import SitemapPage from '../pages/SitemapPage.vue'
import TreasuresPage from '../pages/TreasuresPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: ContentPage },
  { path: '/projects', name: 'projects', component: ContentPage },
  { path: '/friends', name: 'friends', component: ContentPage },
  { path: '/byf', name: 'byf', component: ContentPage },
  { path: '/quotes', name: 'quotes', component: ContentPage },
  { path: '/treasures', name: 'treasures', component: TreasuresPage },
  { path: '/guestbook', name: 'guestbook', component: ContentPage },
  { path: '/sitemap', name: 'sitemap', component: SitemapPage },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
