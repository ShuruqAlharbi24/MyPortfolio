import { createRouter, createWebHistory } from 'vue-router' // Use createWebHistory
import Home from '@/views/Home.vue'
import Project2 from '@/views/Project2.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/project2', component: Project2 },
  // Add other routes here
]

const router = createRouter({
  history: createWebHistory(), // Use history mode
  routes,
})

export default router
