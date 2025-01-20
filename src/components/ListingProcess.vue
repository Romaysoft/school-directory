<template>
  <section class="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How to Get Listed
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Follow these simple steps to get your school listed on our platform
        </p>
      </div>

      <!-- Process Steps with Arrows -->
      <div class="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
        <template v-for="(step, index) in steps" :key="index">
          <!-- Process Step -->
          <div class="w-full lg:w-64 relative">
            <div class="flex flex-col items-center text-center">
              <!-- Step Number -->
              <div class="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10">
                {{ index + 1 }}
              </div>
              <!-- Step Content -->
              <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  {{ step.title }}
                </h3>
                <p class="text-gray-600 text-sm">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Arrow (except after last step) -->
          <div v-if="index < steps.length - 1"
               class="flex justify-center items-center lg:w-32 transform -rotate-90 lg:rotate-0"
          >
            <svg class="w-20 h-12 text-blue-600" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Curved Arrow -->
              <path
                d="M0,25 Q40,25 45,15 T90,25 L98,25 L90,35 L90,15 L98,25"
                stroke="currentColor"
                stroke-width="2"
                stroke-dasharray="4 4"
                class="animate-pulse"
              />
              <!-- Arrow Head -->
              <path
                d="M98,25 L90,20 L90,30 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Create Account',
    description: 'Sign up and create your school administrator account in just a few minutes.'
  },
  {
    title: 'Submit Details',
    description: 'Fill in your school\'s information, programs, facilities, and upload media content.'
  },
  {
    title: 'Verification',
    description: 'Our team will verify your school\'s information to ensure quality and accuracy.'
  },
  {
    title: 'Go Live',
    description: 'Once approved, your school listing will be published and visible to potential students.'
  }
]
</script>

<style scoped>
@keyframes dash {
  to {
    stroke-dashoffset: -20;
  }
}

path {
  animation: dash 2s linear infinite;
}

/* Add smooth rotation for mobile transition */
@media (max-width: 1024px) {
  .transform {
    transition: transform 0.3s ease;
  }
}
</style>
