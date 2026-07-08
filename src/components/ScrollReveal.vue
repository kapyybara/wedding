<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const props = defineProps<{
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom-in'
}>()

const root = ref<HTMLElement | null>(null)
const { observe } = useScrollReveal()

onMounted(() => {
  if (root.value) observe(root.value)
})
</script>

<template>
  <div
    ref="root"
    class="scroll-reveal"
    :class="[animation || 'slide-up']"
  >
    <slot />
  </div>
</template>

<style scoped>
.scroll-reveal {
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.scroll-reveal.is-revealed {
  opacity: 1;
  transform: translate(0, 0) scale(1);
}

.fade-in {
  transform: none;
}

.slide-up {
  transform: translateY(32px);
}

.slide-left {
  transform: translateX(32px);
}

.slide-right {
  transform: translateX(-32px);
}

.zoom-in {
  transform: scale(0.92);
}
</style>
