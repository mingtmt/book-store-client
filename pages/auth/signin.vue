<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow">
      <h1 class="text-2xl font-bold text-center mb-1">Welcome Back! 👋</h1>
      <p class="text-center text-gray-500 mb-6">Sign in to your account</p>

      <form @submit.prevent="handleSignIn" class="space-y-4">
        <input
          v-model="username"
          type="username"
          placeholder="Username"
          required
          class="w-full px-4 py-2 border rounded-md"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
          class="w-full px-4 py-2 border rounded-md"
        />

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
          class="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md"
        >
          Sign In
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-6">
        Don’t have an account?
        <NuxtLink to="/auth/signup" class="font-medium text-black hover:underline">
          Sign Up
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/authStore'
import { useRouter } from 'vue-router'

const api = useApi()
const router = useRouter()
const auth = useAuthStore()

const username = ref('')
const password = ref('')
const rememberMe = ref(false)

async function handleSignIn() {
  try {
    const res = await api.post('auth/login', {
      json: { username: username.value, password: password.value }
    }).json<{ token: string }>()

    auth.setAuth(res.token)

    if (rememberMe.value) {
      useCookie('token', { maxAge: 60 * 60 * 24 * 7 }).value = res.token
    } else {
      useCookie('token').value = res.token
    }

    router.push('/')
  } catch (err) {
    alert('Invalid email or password')
    console.error('Sign in failed:', err)
  }
}
</script>
