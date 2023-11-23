import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/HomeView.vue")
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
