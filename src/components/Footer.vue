<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <!-- Replace with your logo -->
            <img src="@/assets/logo.svg" alt="Logo" class="h-8 w-auto" />
            <span class="text-xl font-bold text-white">SchoolDirectory</span>
          </div>
          <p class="text-sm text-gray-400">
            Connecting students with their ideal educational institutions. Find, compare, and choose the perfect school for your journey.
          </p>
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.016 18.6h-2.472v-3.9c0-.923-.018-2.11-1.287-2.11-1.29 0-1.487 1.005-1.487 2.043v3.967H9.297V9.6h2.376v1.09h.033c.33-.627 1.137-1.29 2.34-1.29 2.505 0 2.97 1.65 2.97 3.795v5.405zM7.032 8.51c-.78 0-1.413-.633-1.413-1.413s.633-1.413 1.413-1.413 1.413.633 1.413 1.413-.633 1.413-1.413 1.413zm1.236 10.09H5.796V9.6h2.472v9z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/browse" class="hover:text-white transition-colors">Browse Schools</router-link>
            </li>
            <li>
              <router-link to="/add-listing" class="hover:text-white transition-colors">List Your School</router-link>
            </li>
            <li>
              <router-link to="/privacy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</router-link>
            </li>
            <li>
              <router-link to="/terms" class="text-gray-400 hover:text-white transition-colors">Terms of Service</router-link>
            </li>

          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">School Categories</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/primary-schools" class="hover:text-white transition-colors">Nursery Schools</router-link>
            </li>
            <li>
              <router-link to="/secondary-schools" class="hover:text-white transition-colors">Primary Schools</router-link>
            </li>
            <li>
              <router-link to="/international-schools" class="hover:text-white transition-colors">Secondary Schools</router-link>
            </li>
            <li>
              <router-link to="/private-schools" class="hover:text-white transition-colors">Tetiary Institution</router-link>
            </li>
          </ul>
        </div>

        <!-- Contact & Newsletter -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p class="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates and educational insights.
          </p>
          <form @submit.prevent="handleSubscribe" class="space-y-3">
            <div class="relative">
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                class="w-full px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
            </div>
            <button
              type="submit"
              class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-sm text-gray-400">
            © {{ new Date().getFullYear() }} SchoolDirectory. All rights reserved.
          </div>
          <div class="flex space-x-6 text-sm">
            <router-link to="/contact" class="text-gray-400 hover:text-white transition-colors">Contact Us</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubscribe = () => {
  // Implement newsletter subscription logic
  console.log('Subscribe:', email.value)
  email.value = ''
}
</script>
