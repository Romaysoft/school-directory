<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow">
        <!-- Header -->
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h1 class="text-2xl font-semibold text-gray-900">Settings</h1>
          <button
            @click="router.back()"
            class="text-gray-600 hover:text-gray-900"
          >
            ← Back
          </button>
        </div>

        <!-- Settings Sections -->
        <div class="p-6 space-y-8">
          <!-- Notifications -->
          <section>
            <h2 class="text-lg font-medium text-gray-900 mb-4">Notifications</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-medium text-gray-700">Email Notifications</h3>
                  <p class="text-sm text-gray-500">Receive emails about new inquiries</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="settings.emailNotifications"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-medium text-gray-700">SMS Notifications</h3>
                  <p class="text-sm text-gray-500">Receive SMS for urgent updates</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="settings.smsNotifications"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </section>

          <!-- Privacy -->
          <section>
            <h2 class="text-lg font-medium text-gray-900 mb-4">Privacy</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-medium text-gray-700">Public Profile</h3>
                  <p class="text-sm text-gray-500">Make your profile visible to everyone</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="settings.publicProfile"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </section>

          <!-- Account -->
          <section>
            <h2 class="text-lg font-medium text-gray-900 mb-4">Account</h2>
            <div class="space-y-4">
              <button
                @click="changePassword"
                class="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Change Password
              </button>
              <button
                @click="deleteAccount"
                class="block text-sm text-red-600 hover:text-red-500"
              >
                Delete Account
              </button>
            </div>
          </section>
        </div>

        <!-- Save Button -->
        <div class="px-6 py-4 border-t border-gray-200">
          <button
            @click="saveSettings"
            class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const settings = ref({
  emailNotifications: true,
  smsNotifications: false,
  publicProfile: true
})

const saveSettings = async () => {
  try {
    // Implement your save settings logic here
    console.log('Saving settings:', settings.value)
  } catch (error) {
    console.error('Error saving settings:', error)
  }
}

const changePassword = () => {
  // Implement password change logic
  console.log('Change password clicked')
}

const deleteAccount = () => {
  // Implement account deletion logic
  console.log('Delete account clicked')
}
</script>
