<template>
  <footer class="mt-12 px-6 py-4 border-t border-dashed text-sm text-gray-600">
    <div class="flex justify-between items-center">
      <div>BookStore Project</div>

      <div class="flex gap-3">
        <CircleButton>
          <Icon name="ph:linkedin-logo-light" size="20" class="text-gray-600" />
        </CircleButton>
        <CircleButton>
          <Icon name="ph:github-logo-light" size="20" class="text-gray-600" />
        </CircleButton>
      </div>

      <div class="text-xs">by mingtmt</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import CircleButton from "./CircleButton.vue";
</script>
