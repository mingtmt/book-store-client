<template>
  <button
    class="relative group rounded-full outline-none focus:ring-2 focus:ring-blue-400"
    :aria-pressed="isHover"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @focus="isHover = true"
    @blur="isHover = false"
  >
    <!-- Blue "shadow" circle -->
    <span
      class="absolute left-1 top-1 rounded-full"
      :class="['transition-all', 'w-8 h-8', 'bg-sky-400', 'z-0']"
    ></span>

    <!-- Main button circle -->
    <span
      class="block relative rounded-full border-2 border-gray-500 transition-colors z-10"
      :class="[
        'w-8 h-8 flex items-center justify-center',
        isHover ? 'bg-yellow-400' : 'bg-white',
      ]"
    >
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
const isHover = ref(false);
</script>
