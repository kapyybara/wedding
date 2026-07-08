<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function onScroll() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div
    class="fixed left-0 top-0 z-[100] h-0.5 w-full bg-border-subtle/60 backdrop-blur-sm"
    role="progressbar"
    :aria-valuenow="progress"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Tiến trình đọc trang"
  >
    <div
      class="h-full bg-gradient-to-r from-gold-light to-gold transition-[width] duration-150 ease-out"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>

