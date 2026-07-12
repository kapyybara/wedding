<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { wedding } from '../data/wedding'
import { onImgError } from '../data/imageFallback'
import { useScrollReveal } from '../composables/useScrollReveal'
import Dove from './Dove.vue'

const root = ref<HTMLElement | null>(null)
const { observe } = useScrollReveal(0.3)

onMounted(() => {
  if (root.value) observe(root.value)
})
</script>

<template>
  <section
    ref="root"
    class="monogram-section relative flex h-[60vh] min-h-[420px] items-center justify-center overflow-hidden"
  >
    <img
      :src="wedding.photos.monogram"
      alt="Nhật Tiến và Phương Vy trên bãi biển"
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
      @error="onImgError"
    />
    <div class="absolute inset-0 bg-ink/45"></div>

    <div class="dove-wrap absolute left-[10%] top-[20%] h-14 w-20 sm:h-20 sm:w-28">
      <Dove class="dove-flutter h-full w-full" />
    </div>

    <span
      class="monogram-text relative px-6 text-center font-script text-5xl text-cream [text-shadow:0_2px_20px_rgba(0,0,0,0.4)] sm:text-7xl"
    >
      {{ wedding.groomShort }} và {{ wedding.brideShort }}
    </span>
  </section>
</template>

<style scoped>
.monogram-text {
  opacity: 0;
  transform: scale(0.85);
  transition: opacity 1s ease-out, transform 1s cubic-bezier(0.22, 1, 0.36, 1);
}
.monogram-section.is-revealed .monogram-text {
  opacity: 1;
  transform: scale(1);
}

.dove-wrap {
  opacity: 0;
  transform: translate(-70px, 24px) scale(0.85);
  transition: opacity 1.1s ease-out 0.2s, transform 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
}
.monogram-section.is-revealed .dove-wrap {
  opacity: 0.92;
  transform: translate(0, 0) scale(1);
}

.dove-flutter {
  animation: dove-flutter 3.4s ease-in-out 1.7s infinite;
  animation-play-state: paused;
}
.monogram-section.is-revealed .dove-flutter {
  animation-play-state: running;
}
@keyframes dove-flutter {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(5px, -8px) rotate(-3deg);
  }
}
</style>
