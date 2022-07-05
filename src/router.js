import { createRouter, createWebHashHistory } from 'vue-router'

import AddRecipi from './components/AddRecipi.vue'
import RecipeList from './components/RecipeList.vue'

const routes = [
  {
    path: '/',
    redirect: '/recipe-list',
  },

  {
    path: '/recipe-list',
    component: RecipeList,
    name: RecipeList,
  },

  {
    path: '/add-recipi',
    component: AddRecipi,
    name: AddRecipi,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
