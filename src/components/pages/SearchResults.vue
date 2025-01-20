<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Search Header -->
      <div class="mb-8">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h1 class="text-2xl font-semibold text-gray-900">Search Results</h1>
            <p class="text-sm text-gray-500 mt-1">
              {{ filteredSchools.length }} schools found for "{{ searchQuery }}"
            </p>
          </div>
          <router-link to="/" class="text-indigo-600 hover:text-indigo-700 flex items-center">
            ← Back to Home
          </router-link>
        </div>

        <!-- Search Bar -->
        <div class="bg-white rounded-lg shadow-sm p-4">
          <form @submit.prevent="performSearch" class="flex gap-4">
            <div class="relative flex-grow">
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search schools by name or location..."
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            </div>
            <button
              type="submit"
              class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <!-- Filters -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <select
          v-model="filters.type"
          class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="">All Types</option>
          <option value="nursery">Nursery Schools</option>
          <option value="primary">Primary Schools</option>
          <option value="secondary">Secondary Schools</option>
          <option value="tertiary">Universities</option>
        </select>

        <select
          v-model="filters.rating"
          class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="">All Acceptance Rates</option>
          <option value="10">Under 10%</option>
          <option value="20">Under 20%</option>
          <option value="50">Under 50%</option>
          <option value="100">All Rates</option>
        </select>

        <select
          v-model="filters.location"
          class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="">All Locations</option>
          <option v-for="location in uniqueLocations" :key="location" :value="location">
            {{ location }}
          </option>
        </select>

        <button
          @click="resetFilters"
          class="px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Reset Filters
        </button>
      </div>

      <!-- Results Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="school in filteredSchools"
          :key="school.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
          @click="router.push(`/school/${school.id}`)"
        >
          <div class="relative">
            <img
              :src="school.image"
              :alt="school.name"
              class="w-full h-48 object-cover"
            />
            <div class="absolute top-4 right-4">
              <span
                class="text-xs px-3 py-1.5 rounded-full font-medium shadow-sm"
                :class="categoryStyles[getSchoolCategory(school.id)]"
              >
                {{ categoryNames[getSchoolCategory(school.id)] }}
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-gray-900">{{ school.name }}</h3>
            <p class="text-gray-600 mb-3 flex items-center">
              <span class="mr-2">📍</span>
              {{ school.location }}
            </p>
            <p class="text-gray-700 line-clamp-2 mb-4">{{ school.description }}</p>
            <div class="pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
              <span class="text-gray-500 flex items-center">
                <span class="mr-2">📅</span>
                Founded: {{ school.details.founded }}
              </span>
              <span class="text-gray-500 flex items-center">
                <span class="mr-2">👥</span>
                {{ school.details.enrollment }} Students
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="filteredSchools.length === 0"
        class="text-center py-12 bg-white rounded-lg shadow-sm"
      >
        <span class="text-4xl mb-4 block">🔍</span>
        <p class="text-gray-900 text-lg font-medium mb-2">No schools found</p>
        <p class="text-gray-500">
          Try adjusting your search terms or filters
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { schools as schoolsData } from '@/data/schools'

const route = useRoute()
const router = useRouter()
const searchQuery = ref('')
const filters = ref({
  type: '',
  rating: '',
  location: ''
})

// Initialize schools data
const schools = ref(schoolsData)

// Helper function to determine school category
const getSchoolCategory = (schoolId) => {
  if (schoolId >= 7 && schoolId <= 8) return 'nursery'
  if (schoolId >= 9 && schoolId <= 10) return 'primary'
  if (schoolId >= 11 && schoolId <= 12) return 'secondary'
  return 'tertiary'
}

// Category styling map
const categoryStyles = {
  nursery: 'bg-pink-100 text-pink-800',
  primary: 'bg-green-100 text-green-800',
  secondary: 'bg-purple-100 text-purple-800',
  tertiary: 'bg-blue-100 text-blue-800'
}

const categoryNames = {
  nursery: 'Nursery',
  primary: 'Primary',
  secondary: 'Secondary',
  tertiary: 'University'
}

// Get unique locations for filter dropdown
const uniqueLocations = computed(() => {
  return [...new Set(schools.value.map(school => school.location))]
})

// Filter schools based on search query and filters
const filteredSchools = computed(() => {
  let results = schools.value

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    results = results.filter(school =>
      school.name.toLowerCase().includes(query) ||
      school.location.toLowerCase().includes(query) ||
      school.description.toLowerCase().includes(query)
    )
  }

  // Type filter
  if (filters.value.type) {
    results = results.filter(school =>
      getSchoolCategory(school.id) === filters.value.type
    )
  }

  // Rating filter (acceptance rate)
  if (filters.value.rating) {
    results = results.filter(school => {
      const rate = parseFloat(school.details.acceptance_rate)
      return rate <= parseFloat(filters.value.rating)
    })
  }

  // Location filter
  if (filters.value.location) {
    results = results.filter(school => school.location === filters.value.location)
  }

  return results
})

const performSearch = () => {
  router.push({
    name: 'SearchResults',
    query: { q: searchQuery.value, ...filters.value }
  })
}

const resetFilters = () => {
  filters.value = {
    type: '',
    rating: '',
    location: ''
  }
}

onMounted(() => {
  // Get search query and filters from URL
  if (route.query.q) {
    searchQuery.value = route.query.q
  }
  if (route.query.type) {
    filters.value.type = route.query.type
  }
  if (route.query.rating) {
    filters.value.rating = route.query.rating
  }
  if (route.query.location) {
    filters.value.location = route.query.location
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
