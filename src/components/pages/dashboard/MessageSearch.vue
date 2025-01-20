<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900">Search Results</h1>
          <p class="text-sm text-gray-500 mt-1">
            {{ searchResults.length }} results for "{{ searchQuery }}"
          </p>
        </div>
        <button
          @click="router.back()"
          class="text-gray-600 hover:text-gray-900"
        >
          ← Back to Messages
        </button>
      </div>

      <!-- Search Bar -->
      <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div class="relative">
          <input
            type="text"
            v-model="searchQuery"
            @input="performSearch"
            placeholder="Search messages..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <span class="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      <!-- Search Results -->
      <div class="space-y-4">
        <div
          v-for="result in searchResults"
          :key="result.messageId"
          class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <!-- Conversation Info -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span class="text-xl">{{ result.avatar }}</span>
              </div>
              <div class="ml-3">
                <p class="font-medium text-gray-900">{{ result.name }}</p>
                <p class="text-sm text-gray-500">{{ result.date }}</p>
              </div>
            </div>
            <button
              @click="openConversation(result.conversationId)"
              class="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
            >
              View Conversation →
            </button>
          </div>

          <!-- Message Preview -->
          <div class="bg-gray-50 rounded-lg p-4">
            <p class="text-gray-700">{{ result.messageContent }}</p>
            <div class="mt-2 flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ result.time }}</span>
              <span class="text-sm text-gray-500">
                {{ result.isSent ? 'Sent' : 'Received' }}
              </span>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div
          v-if="searchResults.length === 0"
          class="bg-white rounded-lg shadow-sm p-8 text-center"
        >
          <span class="text-4xl mb-4 block">🔍</span>
          <h3 class="text-lg font-medium text-gray-900 mb-2">No messages found</h3>
          <p class="text-gray-500">
            Try adjusting your search terms or check your spelling
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const searchQuery = ref('')
const searchResults = ref([])

// Sample search results data
const allMessages = [
  {
    messageId: 1,
    conversationId: 1,
    name: 'John Parent',
    avatar: '👨',
    messageContent: 'Hello, I have a question about admission',
    date: 'Today',
    time: '10:00 AM',
    isSent: false
  },
  {
    messageId: 2,
    conversationId: 1,
    name: 'John Parent',
    avatar: '👨',
    messageContent: 'Is there space available for Grade 5?',
    date: 'Today',
    time: '10:05 AM',
    isSent: false
  },
  {
    messageId: 3,
    conversationId: 2,
    name: 'Sarah Smith',
    avatar: '👩',
    messageContent: 'Hi, I would like to know about your fees structure',
    date: 'Today',
    time: '9:00 AM',
    isSent: false
  }
]

const performSearch = () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }

  const query = searchQuery.value.toLowerCase()
  searchResults.value = allMessages.filter(message =>
    message.messageContent.toLowerCase().includes(query) ||
    message.name.toLowerCase().includes(query)
  )
}

const openConversation = (conversationId) => {
  router.push({
    name: 'Messages',
    query: { conversation: conversationId }
  })
}

onMounted(() => {
  // Get search query from route if it exists
  if (route.query.q) {
    searchQuery.value = route.query.q
    performSearch()
  }
})
</script>
