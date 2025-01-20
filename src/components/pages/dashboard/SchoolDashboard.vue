<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Top Navigation Bar -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex flex-wrap items-center gap-[820px]">
            <span class="text-gray-700">Welcome, {{ schoolName }}</span>
            <button
              class="p-2 rounded-full bg-indigo-700 hover:bg-red-600 text-white "
              @click="logout"
            >
              <span class="">Log Out ←</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Stats Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <div class="bg-white rounded-lg shadow p-6">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-indigo-100 text-indigo-600">
        <span class="text-2xl">👀</span>
      </div>
      <div class="ml-4">
        <p class="text-sm font-medium text-gray-500">Profile Views</p>
        <p class="text-2xl font-semibold text-gray-900">{{ stats.views }}</p>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg shadow p-6">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-green-100 text-green-600">
        <span class="text-2xl">📝</span>
      </div>
      <div class="ml-4">
        <p class="text-sm font-medium text-gray-500">Total Inquiries</p>
        <p class="text-2xl font-semibold text-gray-900">{{ stats.inquiries }}</p>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg shadow p-6">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
        <span class="text-2xl">⭐</span>
      </div>
      <div class="ml-4">
        <p class="text-sm font-medium text-gray-500">Average Rating</p>
        <p class="text-2xl font-semibold text-gray-900">{{ stats.rating }}/5</p>
      </div>
    </div>
  </div>
</div>


      <!-- Quick Actions -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div class="grid grid-cols-2 gap-4">
            <router-link
              v-for="action in quickActions"
              :key="action.name"
              :to="action.route"
              class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span class="text-2xl mr-3">{{ action.icon }}</span>
              <span class="text-sm font-medium text-gray-700">{{ action.name }}</span>
            </router-link>
          </div>
        </div>

        <!-- Recent Inquiries -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Recent Inquiries</h2>
          <div class="space-y-4">
            <div
              v-for="inquiry in recentInquiries"
              :key="inquiry.id"
              class="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <p class="font-medium text-gray-900">{{ inquiry.name }}</p>
                <p class="text-sm text-gray-500">{{ inquiry.email }}</p>
              </div>
              <span class="text-sm text-gray-500">{{ inquiry.date }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- School Profile Preview -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold text-gray-900">School Profile</h2>
          <router-link
            to="/dashboard/edit-profile"
            class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Edit Profile
          </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              :src="schoolProfile.image"
              alt="School"
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div class="space-y-4">
            <div>
              <h3 class="text-sm font-medium text-gray-500">School Name</h3>
              <p class="text-gray-900">{{ schoolProfile.name }}</p>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-500">Location</h3>
              <p class="text-gray-900">{{ schoolProfile.location }}</p>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-500">Contact</h3>
              <p class="text-gray-900">{{ schoolProfile.contact }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const schoolName = ref('Cambridge International School')

const stats = ref({
  views: 1234,
  inquiries: 56,
  rating: 4.8
})

const quickActions = ref([
  {
    name: 'Update Profile',
    icon: '✏️',
    route: '/dashboard/edit-profile'
  },
  {
    name: 'View Analytics',
    icon: '📊',
    route: '/dashboard/analytics'
  },
  {
    name: 'Messages',
    icon: '💬',
    route: '/dashboard/messages'
  },
  {
    name: 'Settings',
    icon: '⚙️',
    route: '/dashboard/settings'
  }
])

const recentInquiries = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', date: '2 hours ago' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', date: '5 hours ago' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', date: '1 day ago' }
])

const schoolProfile = ref({
  name: 'Cambridge International School',
  location: '123 Education Street, Academic City',
  contact: '+1 234 567 890',
  image: 'https://placehold.co/600x400'
})

const logout = async () => {
  try {
    // Implement logout logic here
    await router.push('/login')
  } catch (error) {
    console.error('Error during logout:', error)
  }
}
</script>�
