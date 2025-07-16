<template>
  <header class="flex justify-between items-center px-6 py-4 border-b">
    <div class="flex items-center gap-2 text-lg font-heading text-gray-800">
      <Icon icon="ph:book-open" class="text-gray-800 w-6 h-6" />
      BOOKStore
    </div>

    <div class="flex gap-4 text-gray-600 text-xl">
      <button>
        <Icon icon="ph:bookmark-simple-light" class="text-gray-800 w-6 h-6" />
      </button>
      <button>
        <Icon icon="ph:shopping-cart-simple-light" class="text-gray-800 w-6 h-6" />
      </button>
      <button @click="handleProfileClick">
        <Icon icon="ph:user-light" class="text-gray-800 w-6 h-6" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue' 
import { useAuthStore } from '~/stores/authStore'
const auth = useAuthStore()
const router = useRouter()

function handleProfileClick() {
  console.log(auth.token)
  if (auth.token) {
    router.push('/user/info')
  } else {
    router.push('/auth/signin')
  }
}
</script>
