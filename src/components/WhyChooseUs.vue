<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why List Your School With Us?
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Join hundreds of schools already benefiting from our platform's extensive reach and powerful features
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features"
             :key="index"
             class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-lg">
              <component
                :is="feature.icon"
                class="w-6 h-6 text-blue-600"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 ml-4">
              {{ feature.title }}
            </h3>
          </div>
          <p class="text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- CTA Button -->
      <!-- Modified CTA Button Section -->
      <!-- Enhanced Responsive CTA Button Section -->
      <!-- Compact Side-by-Side CTA Buttons -->
      <div class="text-center mt-12 flex justify-center items-center gap-3">
        <router-link
          to="/add-listing"
          class="inline-flex justify-center items-center bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base whitespace-nowrap"
        >
          <span>List Your School</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </router-link>
        <router-link
          to="/about"
          class="inline-flex justify-center items-center bg-white text-blue-600 border-2 border-blue-600 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base whitespace-nowrap"
        >
          <span>How It Works</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CursorArrowRaysIcon
} from '@heroicons/vue/24/outline'

const features = [
  {
    icon: GlobeAltIcon,
    title: 'Global Reach',
    description: 'Connect with students from around the world and expand your institution\'s international presence.'
  },
  {
    icon: ChartBarIcon,
    title: 'Enhanced Visibility',
    description: 'Boost your school\'s online presence with our optimized listings and targeted marketing solutions.'
  },
  {
    icon: UserGroupIcon,
    title: 'Direct Student Access',
    description: 'Engage directly with prospective students and streamline your recruitment process.'
  },
  {
    icon: SparklesIcon,
    title: 'Premium Features',
    description: 'Showcase your facilities, programs, and achievements with our advanced listing features.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Trusted Platform',
    description: 'Join a verified network of educational institutions trusted by students and parents alike.'
  },
  {
    icon: CursorArrowRaysIcon,
    title: 'Easy Management',
    description: 'Update your school\'s information and respond to inquiries with our user-friendly dashboard.'
  }
]
</script>
