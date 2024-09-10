import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DestinationView from '@/views/DestinationView.vue'
import DestinationDetail from '@/views/DestinationDetail.vue'
import AccomodationView from '@/views/AccomodationView.vue'
import AccomodationDetail from '@/views/AccomodationDetail.vue'
import ActivitiesView from '@/views/ActivitiesView.vue'
import ActivitiesDetail from '@/views/ActivitiesDetail.vue'
import ContactUs from '@/components/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination',
      name: 'destination',
      component: DestinationView
    },
    {
      path: '/destination/detail/:id',
      name: 'destinationDetail',
      component: DestinationDetail
    },
    {
      path: '/#services',
      name: 'services',
      component: HomeView
    },
    {
      path: '/accomodation',
      name: 'accomodation',
      component: AccomodationView
    },
    {
      path: '/accomodation/detail/:id',
      name: 'accomodationDetail',
      component: AccomodationDetail
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: AccomodationView
    },
    {
      path: '/hotel/detail/:id',
      name: 'hotelDetail',
      component: AccomodationDetail
    },
    {
      path: '/restaurant',
      name: 'restaurant',
      component: AccomodationView
    },
    {
      path: '/activities',
      name: 'activities',
      component: ActivitiesView
    },
    {
      path: '/activities/detail/:id',
      name: 'activitiesDetail',
      component: ActivitiesDetail
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash }
    }
    return { top: 0 }
  }
})

export default router
