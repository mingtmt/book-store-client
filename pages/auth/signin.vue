<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-1 text-center">Welcome Back! 👋</h1>
      <p class="text-center text-gray-500 mb-6">Sign in to your account</p>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div class="flex justify-between items-center text-sm text-gray-600">
          <label class="flex items-center gap-2">
            <input v-model="rememberMe" type="checkbox" />
            Remember me
          </label>
          <NuxtLink to="/auth/forgot-password" class="hover:underline">
            Forgot password?
          </NuxtLink>
        </div>
        <button
          type="submit"
          class="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md font-semibold"
        >
          Sign In
        </button>
      </form>

      <div class="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?
        <NuxtLink to="/auth/signup" class="font-medium text-black hover:underline">
          Sign Up
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<!-- <script setup lang="ts">
import { useAuthStore } from '~/stores/authStore'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

async function handleSubmit() {
  try {
    const res = await $fetch('/api/v1/auth/signin', {
      method: 'POST',
      baseURL: useRuntimeConfig().public.apiBase,
      body: { email: email.value, password: password.value }
    })

    auth.setAuth(res.token, res.user)
    router.push('/')
  } catch (error) {
    console.error('Login failed:', error)
    alert('Invalid email or password')
  }
}
</script> -->
