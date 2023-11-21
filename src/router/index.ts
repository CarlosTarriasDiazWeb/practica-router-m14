import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination/:id',
      name: 'destination',
      component: () => import('@/views/DestinationView.vue'),
      props: route => ({ ...route.params, id: parseInt(route.params.id as string) }),
      children: [
        {
          path: ':experienceSlug',
          name: 'experience.show',
          component: () => import('@/views/ExperienceView.vue'),
          props: route => ({ ...route.params, id: parseInt(route.params.id as string) })
        }
      ]
    },
    //   {
    //     path: '/destination/:id/:slug',
    //     name: 'destination.show',
    //     component: () => import('@/views/DestinationView.vue'),
    //     props: route => ({ ...route.params, id: parseInt(route.params.id})
    //   }),
    // children: [
    //   {
    //     path: ':experienceSlug',
    //     name: 'experience.show',
    //     component: () => import(),
    //     props: route
    //   }
    // ]
    //   }
  ]
})

export default router
