<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { wedding } from '../data/wedding'
import { onImgError } from '../data/imageFallback'

const heroRef = ref<HTMLElement | null>(null)
const offset = ref(0)

function onScroll() {
  if (heroRef.value) {
    const rect = heroRef.value.getBoundingClientRect()
    const winH = window.innerHeight
    const progress = 1 - rect.top / winH
    offset.value = Math.min(Math.max(progress * 25, -8), 15)
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <section ref="heroRef" class="relative overflow-hidden" id="hero">
    <!-- background photo with parallax -->
    <img
      :src="wedding.photos.hero"
      alt="Khu vườn nơi tổ chức đám cưới"
      class="absolute inset-0 h-[110%] w-full object-cover will-change-transform"
      :style="{ transform: `translateY(${offset}px)` }"
      loading="eager"
      @error="onImgError"
    />
    <!-- Deep botanical-green overlay, matching the reference's forest-toned duotone -->
    <div class="absolute inset-0 bg-forest-dark/35 mix-blend-multiply"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-overlay-dark/45 via-transparent to-overlay-dark/60"></div>

    <div class="relative z-10 flex min-h-screen flex-col sm:min-h-[85vh]">
      <div class="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-8 py-10 text-center">
        <!-- Small tracked eyebrow -->
        <p class="corner-label hero-in hero-in-1 text-cream/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
          Chúng mình sắp cưới
        </p>

        <!-- Script names — the focal point, exactly like the reference -->
        <h1
          class="font-script hero-in hero-in-2 mt-4 text-6xl leading-none text-cream [text-shadow:0_2px_20px_rgba(0,0,0,0.45)] sm:text-8xl"
        >
          {{ wedding.groom }} &amp; {{ wedding.bride }}
        </h1>

        <!-- Date, small tracked caps below the script name -->
        <p class="corner-label hero-in hero-in-3 mt-5 text-cream/80 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
          {{ wedding.dateLabel }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes hero-in {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero-in {
  opacity: 0;
  animation: hero-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.hero-in-1 {
  animation-delay: 0.15s;
}
.hero-in-2 {
  animation-delay: 0.35s;
}
.hero-in-3 {
  animation-delay: 0.65s;
}
</style>
