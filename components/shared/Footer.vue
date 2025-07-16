<template>
  <footer class="mt-12 px-6 py-4 border-t border-dashed text-sm text-gray-600">
    <div class="flex justify-between items-center">
      <div>BookStore Project</div>

      <div class="flex gap-3">
        <CircleButton>
          <Icon icon="ph:linkedin-logo-light" class="text-gray-600 w-6 h-6" />
        </CircleButton>
        <CircleButton>
          <Icon icon="ph:github-logo-light" class="text-gray-600 w-6 h-6" />
        </CircleButton>
      </div>

      <div class="text-xs">by mingtmt</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import CircleButton from "./CircleButton.vue";
</script>
