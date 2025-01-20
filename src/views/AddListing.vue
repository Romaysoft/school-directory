<!-- eslint-disable vue/valid-v-model -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form data
const description = ref('')
const location = ref('')
const founded = ref('')
const enrollment = ref('')
const acceptanceRate = ref('')
const tuition = ref('')
const programs = ref([''])
const facilities = ref([''])
const achievements = ref([''])
const contactEmail = ref('')
const contactPhone = ref('')
const contactAddress = ref('')
const galleryImages = ref([''])
const galleryVideos = ref([''])

// New reactive variable for school category
const schoolCategory = ref('')

// Add a new program, facility, or achievement
const addField = (field) => {
  if (field === 'programs') {
    programs.value.push('')
  } else if (field === 'facilities') {
    facilities.value.push('')
  } else if (field === 'achievements') {
    achievements.value.push('')
  } else if (field === 'galleryImages') {
    galleryImages.value.push({ url: '', caption: '' })
  } else if (field === 'galleryVideos') {
    galleryVideos.value.push({ url: '', title: '', description: '' })
  }
}

// Handle form submission
const handleSubmit = () => {
  const newSchool = {
    description: description.value,
    location: location.value,
    details: {
      founded: founded.value,
      enrollment: enrollment.value,
      acceptance_rate: acceptanceRate.value,
      tuition: tuition.value,
      programs: programs.value,
      facilities: facilities.value,
      achievements: achievements.value,
    },
    contact: {
      email: contactEmail.value,
      phone: contactPhone.value,
      address: contactAddress.value,
    },
    gallery: {
      images: galleryImages.value,
      videos: galleryVideos.value,
    },
    category: schoolCategory.value,
  }

  // Here you would typically send `newSchool` to your backend API
  console.log('New School Listing:', newSchool)

  // Simulate API call and get the new school's ID (replace with actual API call)
  const newSchoolId = '123'; // Replace this with the actual ID returned from your API

  // Redirect to the school details page of the new school
  router.push(`/school/${newSchoolId}`) // Adjust the route as necessary
}
</script>

<template>
  <div class="max-w-7xl mx-auto pt-8">
    <h1 class="text-3xl font-bold mb-6">List Your School</h1>
    <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded-lg p-8">
      <div class="grid gap-6">
      <div class="mt-8">
        <label class="block text-sm font-medium text-gray-700">Description</label>
        <textarea v-model="description" required class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500" rows="4"></textarea>
      </div>

      <div>
          <label class="block text-sm font-medium text-gray-700">Location</label>
          <input v-model="location" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Location" />
        </div>
      </div>

      <h2 class="text-xl font-bold mt-6">Details</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Founded</label>
          <input v-model="founded" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Year Founded?">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Enrollment</label>
          <input v-model="enrollment" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="No. of Enrolled Students?"/>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Acceptance Rate</label>
          <input v-model="acceptanceRate" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Acceptance Rate?"/>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Annual Tuition</label>
          <input v-model="tuition" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Annual Tuition?"/>
        </div>
      </div>

      <h2 class="text-xl font-bold mt-6">Programs</h2>
      <div class="space-y-4">
        <div v-for="(program, index) in programs" :key="index" class="flex items-center">
          <input v-model="programs[index]" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Program Name" />
          <button type="button" @click="addField('programs')" class="ml-2 text-indigo-600">+</button>
        </div>
      </div>

      <h2 class="text-xl font-bold mt-6">Facilities</h2>
      <div class="space-y-4">
        <div v-for="(facility, index) in facilities" :key="index" class="flex items-center">
          <input v-model="facility[index]" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Facility Name" />
          <button type="button" @click="addField('facilities')" class="ml-2 text-indigo-600">+</button>
        </div>
      </div>

      <h2 class="text-xl font-bold mt-6">Achievements</h2>
      <div class="space-y-4">
        <div v-for="(achievement, index) in achievements" :key="index" class="flex items-center">
          <input v-model="achievement[index]" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Achievement" />
          <button type="button" @click="addField('achievements')" class="ml-2 text-indigo-600">+</button>
        </div>
      </div>

      <h2 class="text-xl font-bold mt-6">Contact Information</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="contactEmail" type="email" required class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Email">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Phone</label>
          <input v-model="contactPhone" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Phone Number"/>
        </div>
        <div class="col-span-2">
          <label class="block text-sm font-medium text-gray-700">Address</label>
          <input v-model="contactAddress" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Full Address"/>
        </div>
      </div>

      <h2 class="text-xl font-bold mt-6">School Category</h2>
      <div class="mt-4">
        <label class="block text-sm font-medium text-gray-700">Select Category</label>
        <select v-model="schoolCategory" required class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-2 h-12">
          <option value="" disabled selected>Select a category</option>
          <option value="nursery" class="text-sm">Nursery</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="tertiary">Tertiary</option>
        </select>
      </div>

      <h2 class="text-xl font-bold mt-6">Media Gallery</h2>
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Images</h3>
        <div v-for="(image, index) in galleryImages" :key="index" class="flex items-center">
          <input type="file" @change="(e) => handleImageUpload(e, index)" class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" />
          <input v-model="image.caption" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Image Caption" />
          <button type="button" @click="addField('galleryImages')" class="ml-2 text-indigo-600">+</button>
        </div>

        <h3 class="text-lg font-semibold">Videos</h3>
        <div v-for="(video, index) in galleryVideos" :key="index" class="flex items-center">
          <input v-model="video.url" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Video URL" />
          <input v-model="video.title" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Video Title" />
          <input v-model="video.description" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-4 h-12" placeholder="Video Description" />
          <button type="button" @click="addField('galleryVideos')" class="ml-2 text-indigo-600">+</button>
        </div>
      </div>

      <button type="submit" class="mt-6 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Add Listing</button>
    </form>
  </div>
</template>
