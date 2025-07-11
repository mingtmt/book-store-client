<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <!-- Global Header (Optional) -->
    <!-- <Header v-if="showLayout" /> -->

    <!-- Page Content -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Global Footer (Optional) -->
    <!-- <Footer v-if="showLayout" /> -->
  </div>
</template>

<script setup lang="ts">
// import Header from '~/components/layout/Header.vue'
// import Footer from '~/components/layout/Footer.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Hide header/footer on auth pages
const showLayout = computed(() => !route.path.startsWith('/auth'))
</script>
