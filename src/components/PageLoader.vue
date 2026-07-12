<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { wedding } from '../data/wedding'

const visible = ref(true)
const leaving = ref(false)

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const holdMs = prefersReducedMotion ? 0 : 1100

  window.setTimeout(() => {
    leaving.value = true
    window.setTimeout(() => {
      visible.value = false
    }, prefersReducedMotion ? 0 : 600)
  }, holdMs)
})
</script>

<template>
  <div
    v-if="visible"
    class="page-loader fixed inset-0 z-[200] flex items-center justify-center bg-forest-dark"
    :class="{ 'is-leaving': leaving }"
    aria-hidden="true"
  >
    <span class="loader-mark px-6 text-center font-script text-4xl text-cream sm:text-6xl">
      {{ wedding.groomShort }} và {{ wedding.brideShort }}
    </span>
  </div>
</template>

<style scoped>
.page-loader {
  transition: opacity 0.6s ease-in, visibility 0.6s ease-in;
}
.loader-mark {
  opacity: 0;
  transform: scale(0.9);
  animation: loader-mark-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards;
}
.page-loader.is-leaving {
  opacity: 0;
  pointer-events: none;
}
@keyframes loader-mark-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
