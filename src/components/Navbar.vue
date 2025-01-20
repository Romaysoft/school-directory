<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <img src="@/assets/logo.svg" alt="Logo" class="h-8 w-auto" />
            <span class="text-xl font-bold text-gray-900">SchoolDirectory</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            class="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            {{ item.name }}
          </router-link>

          <!-- Dynamic Auth Button -->
          <template v-if="isAuthenticated">
            <div class="relative">
              <button
                @click="toggleProfileMenu"
                class="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-blue-600 text-lg">{{ schoolInitial }}</span>
                </div>
                <span class="hidden lg:block">{{ schoolName }}</span>
              </button>

              <!-- Profile Dropdown -->
              <div
                v-if="showProfileMenu"
                class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
              >
                <router-link
                  to="/dashboard"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </router-link>
                <router-link
                  to="/dashboard/settings"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </router-link>
                <button
                  @click="handleLogout"
                  class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <router-link
              to="/login"
              class="text-gray-600 hover:text-blue-600 transition-colors duration-200 border-2 border-blue-400 rounded-lg px-4 py-1.5 inline-flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="blue"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Login/Register</span>
            </router-link>
          </template>

          <router-link
            to="/add-listing"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Add Listing</span>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              :class="{'hidden': isOpen, 'block': !isOpen }"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{'block': isOpen, 'hidden': !isOpen }"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-if="isOpen"
      class="md:hidden absolute top-16 right-0 w-64 bg-white shadow-lg rounded-bl-lg"
      ref="mobileMenu"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in navigationItems"
          :key="item.name"
          :to="item.href"
          class="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:bg-gray-50"
          @click="closeMenu"
        >
          {{ item.name }}
        </router-link>

        <!-- Mobile Auth Buttons -->
        <div class="px-3 py-3 space-y-2">
          <template v-if="isAuthenticated">
            <router-link
              to="/dashboard"
              class="block w-full text-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 border-2 border-blue-400 rounded-lg hover:bg-gray-50"
              @click="closeMenu"
            >
              Dashboard
            </router-link>
            <button
              @click="handleLogout"
              class="w-full text-center px-4 py-2 text-red-600 hover:text-red-700 transition-colors duration-200"
            >
              Logout
            </button>
          </template>
          <template v-else>
            <router-link
              to="/login"
              class="block w-full text-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 border-2 border-blue-400 rounded-lg hover:bg-gray-50"
              @click="closeMenu"
            >
              Login/Register
            </router-link>
          </template>
          <router-link
            to="/add-listing"
            class="w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            @click="closeMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Add Listing</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>

  <!-- Overlay for clicking outside -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-25 md:hidden z-40"
    @click="closeMenu"
  ></div>

  <!-- Spacer to prevent content from hiding under fixed navbar -->
  <div class="h-16"></div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)
const mobileMenu = ref(null)
const showProfileMenu = ref(false)

// Authentication state (replace with your actual auth logic)
const isAuthenticated = ref(false) // This should be connected to your auth store
const schoolName = ref('Cambridge School') // This should come from your auth store
const schoolInitial = computed(() => schoolName.value.charAt(0))

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Browse Schools', href: '/search' },
  { name: 'About', href: '/about-us' },
  { name: 'Contact', href: '/contact' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
  showProfileMenu.value = false
}

const toggleProfileMenu = () => {
  showProfileMenu.value = !showProfileMenu.value
}

const handleLogout = async () => {
  try {
    // Implement your logout logic here
    isAuthenticated.value = false
    showProfileMenu.value = false
    await router.push('/login')
  } catch (error) {
    console.error('Error during logout:', error)
  }
}

// Handle click outside
const handleClickOutside = (event) => {
  if (mobileMenu.value && !mobileMenu.value.contains(event.target) &&
      !event.target.closest('button')) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  // Check authentication status on mount
  // This should be replaced with your actual auth check
  const token = localStorage.getItem('authToken')
  isAuthenticated.value = !!token
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Optional: Add smooth shadow transition when scrolling */
nav {
  transition: box-shadow 0.3s ease;
}

/* Optional: Add backdrop blur for a modern look */
nav {
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.95);
}

/* Add transition for mobile menu */
.md\:hidden {
  transition: all 0.3s ease-in-out;
}

/* Optional: Add animation for mobile menu */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.absolute {
  animation: slideIn 0.2s ease-out;
}
</style>
