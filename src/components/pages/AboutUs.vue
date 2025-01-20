<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Breadcrumb Section -->
    <div class="relative bg-white">
      <!-- Background image with overlay -->
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        :style="{ backgroundImage: `url(${logoImage})` }"
      >
        <div class="absolute inset-0 bg-black/50"></div> <!-- Dark overlay -->
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 class="text-3xl font-bold text-white mb-4">About Us</h1>
        <nav class="flex justify-center" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <router-link 
                to="/" 
                class="inline-flex items-center text-sm font-medium text-white hover:text-blue-600"
              >
                <svg 
                  class="mr-2 w-4 h-4" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
                Home
              </router-link>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg 
                  class="w-6 h-6 text-gray-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fill-rule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-1 text-sm font-medium text-white md:ml-2">About Us</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- About Us Section with Image -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="relative h-[300px] md:h-[400px]">
            <img 
              :src="logoImage" 
              alt="About Us" 
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800">Who We Are</h2>
            <p class="text-gray-600 leading-relaxed">
              We are a dedicated team of professionals committed to delivering innovative solutions that transform businesses. With years of experience in the industry, we understand the unique challenges organizations face and work tirelessly to provide effective solutions.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses across various sectors. We believe in building lasting relationships with our clients through transparency, reliability, and exceptional service.
            </p>
          </div>
        </div>

        <!-- Mission & Vision Section -->
        <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 ml-4">Our Mission</h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            To empower businesses with innovative solutions that drive growth, efficiency, and success in the digital age. We strive to be at the forefront of technological advancement while maintaining our commitment to quality and customer satisfaction.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 ml-4">Our Vision</h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            To be recognized as a global leader in providing cutting-edge solutions that set new industry standards. We envision a future where our innovations contribute significantly to the success of businesses worldwide.
          </p>
        </div>
      </div>
      <!-- Values Section -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Our Values</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="space-y-2">
            <h4 class="text-lg font-semibold text-gray-700">✨ Excellence</h4>
            <p class="text-gray-600">Striving for the highest quality in everything we do.</p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-semibold text-gray-700">🤝 Collaboration</h4>
            <p class="text-gray-600">Working together to achieve exceptional results.</p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-semibold text-gray-700">💡 Innovation</h4>
            <p class="text-gray-600">Embracing new ideas and creative solutions.</p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-semibold text-gray-700">🎯 Customer Focus</h4>
            <p class="text-gray-600">Putting our clients' needs at the heart of our work.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <ListingProcess />
</template>

<script setup>
// No additional script needed for basic functionality
import logoImage from '@/assets/logo.svg'
import ListingProcess from '../ListingProcess.vue';
</script>

<style scoped>
/* Optional: Add hover effect to breadcrumb items */
.router-link-active {
  color: #2563eb; /* This is Tailwind's blue-600 color */
}

/* Optional: Add smooth transitions */
a {
  transition: all 0.2s ease-in-out;
}
</style>
