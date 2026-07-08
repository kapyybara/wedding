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
        <p class="corner-label text-cream/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
          Chúng mình sắp cưới
        </p>

        <!-- Script names — the focal point, exactly like the reference -->
        <h1
          class="font-script mt-4 text-6xl leading-none text-cream [text-shadow:0_2px_20px_rgba(0,0,0,0.45)] sm:text-8xl"
        >
          {{ wedding.groom }} &amp; {{ wedding.bride }}
        </h1>

        <!-- Date, small tracked caps below the script name -->
        <p class="corner-label mt-5 text-cream/80 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
          {{ wedding.dateLabel }}
        </p>
      </div>
    </div>
  </section>
</template>

