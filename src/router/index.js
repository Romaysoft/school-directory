import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/components/pages/Index.vue'
import AboutUs from '@/components/pages/AboutUs.vue'
import Contact from '@/components/pages/Contact.vue'
import LoginPage from '@/components/pages/auth/LoginPage.vue'



// eslint-disable-next-line no-unused-vars
import SchoolDetails from '../views/SchoolDetails.vue'
import RegisterPage from '@/components/pages/auth/RegisterPage.vue';
import ForgottenPassword from '@/components/pages/auth/ForgottenPassword.vue';

const routes = [
  {
    path: '/', name: 'Index', component: Index
  },
  {
    path: '/about-us', name: 'AboutUs', component: AboutUs
  },
  {
    path: '/contact', name: 'Contact', component: Contact
  },
  {
    path: '/login', name: 'Login', component: LoginPage
  },
  {
    path: '/register', name: 'Register', component: RegisterPage
  },
  {
    path: '/forgotten-password', name: 'ForgottenPassword', component: ForgottenPassword
  },

  // { path: '/', redirect: '/index' },
  // { path: 'index', name: 'Index', component: Index },
  {
    path: '/nursery',
    name: 'Nursery',
    component: () => import('@/views/NurserySchools.vue')
  },
  {
    path: '/primary',
    name: 'Primary',
    component: () => import('@/views/PrimarySchools.vue')
  },
  {
    path: '/secondary',
    name: 'Secondary',
    component: () => import('@/views/SecondarySchools.vue')
  },
  {
    path: '/tertiary',
    name: 'Tertiary',
    component: () => import('@/views/TertiaryInstitutions.vue')
  },
  {
    path: '/school/:id',
    name: 'SchoolDetails',
    component: () => import('@/views/SchoolDetails.vue')
  },
  {
    path: '/add-listing',
    name: 'AddListing',
    component: () => import('@/views/AddListing.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/components/pages/dashboard/SchoolDashboard.vue')
  },
  {
    path: '/dashboard/edit-profile',
    name: 'EditProfile',
    component: () => import('@/components/pages/dashboard/EditProfile.vue')
  },
  {
    path: '/dashboard/analytics',
    name: 'Analytics',
    component: () => import('@/components/pages/dashboard/Analytics.vue')
  },
  {
    path: '/dashboard/settings',
    name: 'Settings',
    component: () => import('@/components/pages/dashboard/Settings.vue')
  },
  {
    path: '/dashboard/messages',
    name: 'Messages',
    component: () => import('@/components/pages/dashboard/Messages.vue')
  },
  {
    path: '/dashboard/messages/search',
    name: 'MessageSearch',
    component: () => import('@/components/pages/dashboard/MessageSearch.vue')
  },
  {
    path: '/search',
    name: 'SearchResults',
    component: () => import('@/components/pages/SearchResults.vue')
  }



]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router

