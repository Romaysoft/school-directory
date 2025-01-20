<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-semibold text-gray-900">Analytics Dashboard</h1>
        <div class="flex gap-4">
          <select
            v-model="timeRange"
            class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
          </select>
          <button
            @click="router.back()"
            class="text-gray-600 hover:text-gray-900"
          >
            ← Back
          </button>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div
          v-for="stat in stats"
          :key="stat.name"
          class="bg-white rounded-lg shadow p-6"
        >
          <div class="flex items-center">
            <div class="p-3 rounded-full" :class="stat.bgColor">
              <span class="text-2xl">{{ stat.icon }}</span>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500">{{ stat.name }}</p>
              <p class="text-2xl font-semibold text-gray-900">{{ stat.value }}</p>
              <p
                class="text-sm"
                :class="stat.trend > 0 ? 'text-green-600' : 'text-red-600'"
              >
                {{ stat.trend > 0 ? '↑' : '↓' }} {{ Math.abs(stat.trend) }}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Visitor Chart -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Visitor Traffic</h2>
          <div class="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <!-- Replace with actual chart component -->
            <p class="text-gray-500">Visitor Chart Placeholder</p>
          </div>
        </div>

        <!-- Engagement Chart -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">User Engagement</h2>
          <div class="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <!-- Replace with actual chart component -->
            <p class="text-gray-500">Engagement Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const timeRange = ref('30')

const stats = ref([
  {
    name: 'Total Views',
    value: '12,456',
    trend: 12.5,
    icon: '👀',
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Unique Visitors',
    value: '3,245',
    trend: 8.2,
    icon: '👥',
    bgColor: 'bg-green-100'
  },
  {
    name: 'Inquiries',
    value: '156',
    trend: -2.4,
    icon: '📝',
    bgColor: 'bg-yellow-100'
  },
  {
    name: 'Avg. Time',
    value: '4m 32s',
    trend: 15.3,
    icon: '⏱️',
    bgColor: 'bg-purple-100'
  }
])
</script>
