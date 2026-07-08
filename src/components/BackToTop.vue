<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 600
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="translate-y-4 opacity-0"
    leave-to-class="translate-y-4 opacity-0"
  >
    <button
      v-if="visible"
      type="button"
      class="fixed bottom-6 right-6 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border-subtle bg-cream/80 text-ink shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-gold hover:text-cream hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      aria-label="Về đầu trang"
      @click="scrollTop"
    >
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  </Transition>
</template>

