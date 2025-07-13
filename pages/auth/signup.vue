<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow">
      <h1 class="text-2xl font-bold text-center mb-1">Sign Up</h1>
      <p class="text-center text-gray-500 mb-6">
        Create an account to explore our collection
      </p>

      <form class="space-y-4" @submit.prevent="handleSubmit">
        <input
          v-model="username"
          type="text"
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
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm password"
          required
          class="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          class="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md font-semibold"
        >
          Sign Up
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-6">
        Already have an account?
        <NuxtLink
          to="/auth/signin"
          class="font-medium text-black hover:underline"
          >Sign in</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "~/stores/authStore";

const api = useApi();
const router = useRouter();
const auth = useAuthStore();

const username = ref("");
const password = ref("");
const confirmPassword = ref("");

async function handleSubmit() {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await api
      .post("auth/register", {
        json: {
          username: username.value,
          password: password.value,
        },
      })
      .json<{ token: string }>();

    auth.setAuth(res.token);
    useCookie("token").value = res.token;

    router.push("/");
  } catch (error) {
    console.error("Signup failed:", error);
    alert("Signup failed. Please try again.");
  }
}
</script>
