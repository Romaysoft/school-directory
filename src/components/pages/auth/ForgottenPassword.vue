<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
      <!-- Logo/Header -->
      <div class="text-center flex items-center mx-6 gap-8">
        <img src="@/assets/logo.svg" alt="Logo" class="h-8 w-auto" />
        <span class="text-3xl font-bold text-gray-900">School Directory</span>
      </div>

      <!-- Title and Description -->
      <div class="text-center">
        <h2 class="text-2xl font-semibold text-gray-900">Forgot Password?</h2>
        <p class="mt-2 text-sm text-gray-600">
          No worries! Enter your email and we'll send you reset instructions.
        </p>
      </div>

      <!-- Form -->
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <!-- Email Input -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <div class="mt-1">
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <!-- New Password Input -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">New Password</label>
          <div class="mt-1 relative">
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter new password"
            />
            <button
              type="button"
              @click="togglePassword"
              class="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <span class="text-xl">{{ showPassword ? '👁️' : '👁️‍🗨️' }}</span>
            </button>
          </div>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Reset Password
          </button>
        </div>

        <!-- Back to Login Link -->
        <div class="text-center">
          <router-link
            to="/login"
            class="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Back to Login
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = async () => {
  try {
    // Implement your password reset logic here
    console.log('Reset password for:', email.value)
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>
