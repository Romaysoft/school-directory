<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow p-6">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-semibold text-gray-900">Edit School Profile</h1>
          <button
            @click="router.back()"
            class="text-gray-600 hover:text-gray-900"
          >
            ← Back
          </button>
        </div>

        <!-- Edit Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- School Image -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              School Image
            </label>
            <div class="flex items-center space-x-6">
              <div class="w-32 h-32 relative">
                <img
                  :src="preview || formData.image"
                  alt="School"
                  class="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  @click="$refs.fileInput.click()"
                  class="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                >
                  📷
                </button>
                <input
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="handleImageChange"
                />
              </div>
            </div>
          </div>

          <!-- School Details -->
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                School Name
              </label>
              <input
                v-model="formData.name"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                v-model="formData.location"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                v-model="formData.contact"
                type="tel"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                About School
              </label>
              <textarea
                v-model="formData.about"
                rows="4"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const preview = ref(null)

const formData = ref({
  name: 'Cambridge International School',
  location: '123 Education Street, Academic City',
  contact: '+1 234 567 890',
  image: 'https://placehold.co/600x400',
  about: 'A leading international school dedicated to academic excellence and holistic development.'
})

const handleImageChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    preview.value = URL.createObjectURL(file)
  }
}

const handleSubmit = async () => {
  try {
    // Implement your save logic here
    console.log('Saving profile:', formData.value)
    router.push('/dashboard')
  } catch (error) {
    console.error('Error saving profile:', error)
  }
}
</script> 