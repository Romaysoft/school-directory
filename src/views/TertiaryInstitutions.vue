<script setup>
import { schools } from '@/data/schools'

const tertiarySchools = schools.filter(school => school.category === 'tertiary')
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8">Tertiary Institutions</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="school in tertiarySchools"
        :key="school.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <img
          :src="school.image"
          :alt="school.name"
          class="w-full h-48 object-cover"
        >
        <div class="p-6">
          <h2 class="text-xl font-bold mb-2">{{ school.name }}</h2>
          <p class="text-gray-600 mb-2">{{ school.location }}</p>
          <p class="text-gray-500 mb-4 line-clamp-2">{{ school.description }}</p>
          <router-link
            :to="{ name: 'SchoolDetails', params: { id: school.id }}"
            class="text-blue-600 hover:text-blue-800 font-semibold"
          >
            View Details →
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
