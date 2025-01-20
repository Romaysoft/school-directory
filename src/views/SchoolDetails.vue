<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { schools } from '@/data/schools'

const route = useRoute()
const school = ref(null)

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

const schoolCategory = computed(() => {
  if (!school.value) return null
  return getSchoolCategory(school.value.id)
})

onMounted(() => {
  // Scroll to top when component mounts
  window.scrollTo(0, 0)

  const schoolId = parseInt(route.params.id)
  school.value = schools.find(s => s.id === schoolId)
})
</script>

<template>
  <div class="max-w-7xl mx-auto pt-8">
    <div v-if="school" class="bg-white shadow-lg overflow-hidden">
      <!-- Hero Section -->
      <div class="relative h-96">
        <img :src="school.image" :alt="school.name" class="w-full h-full object-cover">
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
          <div class="flex items-center gap-4 mb-4">
            <span
              class="text-sm px-3 py-1.5 rounded-full font-medium shadow-sm"
              :class="categoryStyles[schoolCategory]"
            >
              {{ categoryNames[schoolCategory] }}
            </span>
          </div>
          <h1 class="text-4xl font-bold text-white mb-2">{{ school.name }}</h1>
          <p class="text-xl text-white">{{ school.location }}</p>
        </div>
      </div>

      <!-- Details Content -->
      <div class="p-8">
        <!-- Overview -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Overview</h2>
          <p class="text-gray-700">{{ school.description }}</p>
        </section>

        <!-- Quick Facts -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6 text-gray-800">Quick Facts</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Founded -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📅</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-600">Founded</h3>
                  <p class="text-2xl font-bold text-blue-600">{{ school.details.founded }}</p>
                </div>
              </div>
            </div>

            <!-- Enrollment -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span class="text-2xl">👥</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-600">Enrollment</h3>
                  <p class="text-2xl font-bold text-green-600">{{ school.details.enrollment }}</p>
                </div>
              </div>
            </div>

            <!-- Acceptance Rate -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span class="text-2xl">📊</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-600">Acceptance Rate</h3>
                  <p class="text-2xl font-bold text-purple-600">{{ school.details.acceptance_rate }}</p>
                </div>
              </div>
            </div>

            <!-- Tuition -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span class="text-2xl">💰</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-600">Annual Tuition</h3>
                  <p class="text-2xl font-bold text-amber-600">{{ school.details.tuition }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Grid Layout for Programs, Facilities, Achievements, and Contact -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Programs -->
          <section class="bg-gray-50 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4 text-indigo-600">Programs</h2>
            <ul class="space-y-3">
              <li v-for="program in school.details.programs"
                  :key="program"
                  class="flex items-center">
                <span class="text-indigo-500 mr-2">•</span>
                <span class="text-gray-700 font-medium">{{ program }}</span>
              </li>
            </ul>
          </section>

          <!-- Facilities -->
          <section class="bg-gray-50 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4 text-emerald-600">Facilities</h2>
            <ul class="space-y-3">
              <li v-for="facility in school.details.facilities"
                  :key="facility"
                  class="flex items-center">
                <span class="text-emerald-500 mr-2">•</span>
                <span class="text-gray-700 font-medium">{{ facility }}</span>
              </li>
            </ul>
          </section>

          <!-- Achievements -->
          <section class="bg-gray-50 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4 text-amber-600">Achievements</h2>
            <ul class="space-y-3">
              <li v-for="achievement in school.details.achievements"
                  :key="achievement"
                  class="flex items-center">
                <span class="text-amber-500 mr-2">•</span>
                <span class="text-gray-700 font-medium">{{ achievement }}</span>
              </li>
            </ul>
          </section>

          <!-- Contact Information -->
          <section class="bg-gray-50 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4 text-blue-600">Contact Information</h2>
            <div class="space-y-3">
              <p class="flex items-center">
                <span class="text-blue-500 font-semibold w-20">Email:</span>
                <a
                  :href="`mailto:${school.details.contact.email}`"
                  class="text-gray-700 hover:text-blue-600"
                >
                  {{ school.details.contact.email }}
                </a>
              </p>
              <p class="flex items-center">
                <span class="text-blue-500 font-semibold w-20">Phone:</span>
                <a
                  :href="`tel:${school.details.contact.phone}`"
                  class="text-gray-700 hover:text-blue-600"
                >
                  {{ school.details.contact.phone }}
                </a>
              </p>
              <p class="flex items-start">
                <span class="text-blue-500 font-semibold w-20">Address:</span>
                <span class="text-gray-700">{{ school.details.contact.address }}</span>
              </p>
            </div>
          </section>
        </div>

        <!-- Media Gallery -->
        <section class="mt-12">
          <h2 class="text-3xl font-bold mb-8 text-gray-800">Media Gallery</h2>

          <!-- Images Gallery -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold mb-6 text-gray-700">Campus Images</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div v-for="(image, index) in school.gallery?.images"
                   :key="index"
                   class="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img :src="image.url"
                     :alt="image.caption"
                     class="w-full h-64 object-cover transition duration-300 group-hover:scale-110">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
                  <p class="text-white">{{ image.caption }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Videos Section -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold mb-6 text-gray-700">Campus Videos</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="(video, index) in school.gallery?.videos"
                   :key="index"
                   class="rounded-lg overflow-hidden shadow-lg">
                <div class="relative pt-[56.25%]">
                  <iframe
                    class="absolute top-0 left-0 w-full h-full"
                    :src="video.url"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                  </iframe>
                </div>
                <div class="p-4 bg-gray-50">
                  <h4 class="font-semibold text-lg mb-2">{{ video.title }}</h4>
                  <p class="text-gray-600">{{ video.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="text-center py-16">
      <div class="animate-pulse">
        <div class="h-8 w-48 bg-gray-200 rounded mx-auto mb-4"></div>
        <div class="h-4 w-32 bg-gray-200 rounded mx-auto"></div>
      </div>
    </div>
  </div>
</template>
