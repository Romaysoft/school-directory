<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { schools, getSchoolsByCategory } from '@/data/schools'

const router = useRouter()
const activeCategory = ref('all')

const categories = [
  { id: 'all', name: 'All Schools' },
  { id: 'nursery', name: 'Nursery Schools' },
  { id: 'primary', name: 'Primary Schools' },
  { id: 'secondary', name: 'Secondary Schools' },
  { id: 'tertiary', name: 'Universities' }
]

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

const filteredSchools = computed(() => {
  if (activeCategory.value === 'all') {
    return schools
  }
  return getSchoolsByCategory(activeCategory.value)
})

const navigateToSchool = (schoolId) => {
  router.push({ name: 'SchoolDetails', params: { id: schoolId }})
}
</script>

<template>
  <section class="py-16 px-4 bg-gray-100">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">Featured Schools</h2>

      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          class="px-6 py-2 rounded-full transition-colors duration-200 font-medium"
          :class="activeCategory === category.id
            ? 'bg-blue-600 text-white shadow-md'
            : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow'"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Schools Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="school in filteredSchools"
          :key="school.id"
          @click="navigateToSchool(school.id)"
          class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
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
          No schools available in this category at the moment.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
