<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-900">Messages</h1>
        <button
          @click="router.back()"
          class="text-gray-600 hover:text-gray-900"
        >
          ← Back
        </button>
      </div>

      <!-- Messages Container -->
      <div class="bg-white rounded-lg shadow">
        <div class="grid grid-cols-1 md:grid-cols-3">
          <!-- Message List -->
          <div class="border-r border-gray-200">
            <!-- Search -->
            <div class="p-4 border-b border-gray-200">
              <form @submit.prevent="handleSearch" class="relative">
                <input
                  type="text"
                  v-model="searchQuery"
                  placeholder="Search messages..."
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <span class="absolute left-3 top-2.5 text-gray-400">🔍</span>
              </form>
            </div>

            <!-- Conversation List -->
            <div class="overflow-y-auto h-[calc(100vh-16rem)]">
              <div
                v-for="conversation in filteredConversations"
                :key="conversation.id"
                @click="selectConversation(conversation)"
                class="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                :class="{ 'bg-indigo-50': selectedConversation?.id === conversation.id }"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span class="text-xl">{{ conversation.avatar }}</span>
                    </div>
                    <div class="ml-3">
                      <p class="font-medium text-gray-900">{{ conversation.name }}</p>
                      <p class="text-sm text-gray-500 truncate">{{ conversation.lastMessage }}</p>
                    </div>
                  </div>
                  <div class="text-xs text-gray-500">{{ conversation.time }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Message Content -->
          <div class="col-span-2 flex flex-col h-[calc(100vh-16rem)]">
            <template v-if="selectedConversation">
              <!-- Conversation Header -->
              <div class="p-4 border-b border-gray-200">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span class="text-xl">{{ selectedConversation.avatar }}</span>
                  </div>
                  <div class="ml-3">
                    <p class="font-medium text-gray-900">{{ selectedConversation.name }}</p>
                    <p class="text-sm text-gray-500">{{ selectedConversation.status }}</p>
                  </div>
                </div>
              </div>

              <!-- Messages -->
              <div class="flex-1 overflow-y-auto p-4 space-y-4">
                <div
                  v-for="message in selectedConversation.messages"
                  :key="message.id"
                  class="flex"
                  :class="{ 'justify-end': message.isSent }"
                >
                  <div
                    class="max-w-[70%] rounded-lg px-4 py-2"
                    :class="message.isSent ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-900'"
                  >
                    <p>{{ message.content }}</p>
                    <p class="text-xs mt-1 opacity-75">{{ message.time }}</p>
                  </div>
                </div>
              </div>

              <!-- Message Input -->
              <div class="p-4 border-t border-gray-200">
                <form @submit.prevent="sendMessage" class="flex gap-2">
                  <input
                    v-model="newMessage"
                    type="text"
                    placeholder="Type a message..."
                    class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Send
                  </button>
                </form>
              </div>
            </template>

            <!-- No Conversation Selected -->
            <div
              v-else
              class="flex-1 flex items-center justify-center text-gray-500"
            >
              Select a conversation to start messaging
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const searchQuery = ref('')
const newMessage = ref('')
const selectedConversation = ref(null)

// Sample conversation data
const conversations = ref([
  {
    id: 1,
    name: 'John Parent',
    avatar: '👨',
    lastMessage: 'Is there space available for Grade 5?',
    time: '2m ago',
    status: 'Active now',
    messages: [
      { id: 1, content: 'Hello, I have a question about admission', time: '10:00 AM', isSent: false },
      { id: 2, content: 'Sure, how can I help you?', time: '10:02 AM', isSent: true },
      { id: 3, content: 'Is there space available for Grade 5?', time: '10:05 AM', isSent: false }
    ]
  },
  {
    id: 2,
    name: 'Sarah Smith',
    avatar: '👩',
    lastMessage: 'Thank you for the information',
    time: '1h ago',
    status: 'Last seen 1h ago',
    messages: [
      { id: 1, content: 'Hi, I would like to know about your fees structure', time: '9:00 AM', isSent: false },
      { id: 2, content: 'I have sent you our fee schedule', time: '9:15 AM', isSent: true },
      { id: 3, content: 'Thank you for the information', time: '9:20 AM', isSent: false }
    ]
  }
])

// Filter conversations based on search query
const filteredConversations = computed(() => conversations.value)

// Select a conversation
const selectConversation = (conversation) => {
  selectedConversation.value = conversation
}

// Send a new message
const sendMessage = () => {
  if (!newMessage.value.trim() || !selectedConversation.value) return

  const message = {
    id: Date.now(),
    content: newMessage.value,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isSent: true
  }

  selectedConversation.value.messages.push(message)
  selectedConversation.value.lastMessage = newMessage.value
  selectedConversation.value.time = 'Just now'
  newMessage.value = ''
}

// Add new search handler
const handleSearch = () => {
  if (!searchQuery.value.trim()) return

  router.push({
    name: 'MessageSearch',
    query: { q: searchQuery.value }
  })
}

// Add mounted hook to handle direct navigation to conversation
onMounted(() => {
  const conversationId = route.query.conversation
  if (conversationId) {
    const conversation = conversations.value.find(c => c.id === Number(conversationId))
    if (conversation) {
      selectConversation(conversation)
    }
  }
})
</script>
