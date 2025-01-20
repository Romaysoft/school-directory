<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="relative bg-gray-900">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <img
        src="@/assets/logo.svg"
        class="w-full h-full object-cover"
        alt="School campus"
      />
      <div class="absolute inset-0 bg-gray-900/70"></div>
    </div>

    <!-- Content Container - Adjusted padding -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-12 sm:py-16 lg:py-20">
        <!-- Hero Text - Adjusted spacing -->
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get Your <br>School Listed
          </h1>
          <p class="text-lg sm:text-xl text-gray-200 mb-8">
            Discover and compare schools in your area.<br> Make an informed decision for your education journey.
          </p>

          <!-- Search Section - Adjusted margin -->
          <div class="max-w-2xl mx-auto mb-6">
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search schools by name or location..."
                  class="w-full px-6 py-4 pr-24 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  v-model="searchQuery"
                />
                <button
                  @click="handleSearch"
                  class="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  SEARCH
                </button>
              </div>
            </div>
          </div>

          <!-- Call to Action Buttons - Adjusted margin -->
          <div class="flex flex-row gap-2 justify-center mb-12">
            <router-link
              to="/add-listing"
              class="inline-flex items-center justify-center px-3 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              List Your School
            </router-link>
            <router-link
              to="/search"
              class="inline-flex items-center justify-center px-3 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
            >
              Browse All Schools
            </router-link>
          </div>

          <!-- Stats Section - Adjusted padding -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pt-6 border-t border-gray-700">
            <!-- Schools Listed -->
            <div class="flex flex-col items-center p-4 backdrop-blur-sm bg-white/10 rounded-lg">
              <div class="text-3xl md:text-4xl font-bold text-white mb-1">
                <span ref="schoolCount" class="inline-block">0</span>
                <span>+</span>
              </div>
              <span class="text-sm md:text-base text-gray-300">Schools Listed</span>
            </div>

            <!-- Students Reached -->
            <div class="flex flex-col items-center p-4 backdrop-blur-sm bg-white/10 rounded-lg">
              <div class="text-3xl md:text-4xl font-bold text-white mb-1">
                <span ref="studentCount" class="inline-block">0</span>
                <span>+</span>
              </div>
              <span class="text-sm md:text-base text-gray-300">Students Reached</span>
            </div>

            <!-- Success Rate -->
            <div class="flex flex-col items-center p-4 backdrop-blur-sm bg-white/10 rounded-lg">
              <div class="text-3xl md:text-4xl font-bold text-white mb-1">
                <span ref="successRate" class="inline-block">0</span>
                <span>%</span>
              </div>
              <span class="text-sm md:text-base text-gray-300">Success Rate</span>
            </div>

            <!-- Countries -->
            <div class="flex flex-col items-center p-4 backdrop-blur-sm bg-white/10 rounded-lg">
              <div class="text-3xl md:text-4xl font-bold text-white mb-1">
                <span ref="countryCount" class="inline-block">0</span>
                <span>+</span>
              </div>
              <span class="text-sm md:text-base text-gray-300">Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const schoolCount = ref(null)
const studentCount = ref(null)
const successRate = ref(null)
const countryCount = ref(null)

const animateValue = (element, start, end, duration) => {
  if (!element) return

  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const currentValue = Math.floor(progress * (end - start) + start)
    element.textContent = currentValue
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

onMounted(() => {
  // Start animations with a slight delay
  setTimeout(() => {
    animateValue(schoolCount.value, 0, 5000, 2000)
    animateValue(studentCount.value, 0, 50000, 2000)
    animateValue(successRate.value, 0, 98, 2000)
    animateValue(countryCount.value, 0, 32, 2000)
  }, 500)
})

const handleSearch = () => {
  if (!searchQuery.value.trim()) return

  router.push({
    name: 'SearchResults',
    query: { q: searchQuery.value }
  })
}
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease, backdrop-filter 0.3s ease;
}

.backdrop-blur-sm:hover {
  transform: translateY(-5px);
  backdrop-filter: blur(12px);
}

/* Optional: Add animation for stats appearance */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid > div {
  animation: fadeInUp 0.5s ease forwards;
}

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }
</style>


