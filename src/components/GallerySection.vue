<script setup lang="ts">
import { ref } from 'vue'
import { wedding, type GalleryPhoto } from '../data/wedding'
import { onImgError } from '../data/imageFallback'
import ScrollReveal from './ScrollReveal.vue'

const active = ref<GalleryPhoto | null>(null)
const openImg = (photo: GalleryPhoto) => (active.value = photo)
const close = () => (active.value = null)

// Bento pattern, repeating every 6 photos: 1 big square, 2 small squares,
// then 3 wide half-rows — mirrors a physical bento box's mixed compartments.
const bentoSpans = [
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-2 sm:row-span-1',
  'sm:col-span-2 sm:row-span-1',
  'sm:col-span-2 sm:row-span-1',
]
const spanClass = (i: number) => bentoSpans[i % bentoSpans.length]
</script>

<template>
  <section class="bg-cream-dark">
    <div class="py-20 text-center sm:py-24">
      <ScrollReveal animation="slide-up">
        <span class="eyebrow">{{ wedding.gallery.title }}</span>
        <p class="mt-3 font-display text-2xl italic text-ink-muted sm:text-3xl">{{ wedding.gallery.subtitle }}</p>
      </ScrollReveal>
    </div>

    <!-- Bento grid — mixed square/wide compartments, seamed by the section's
         cream-dark background instead of borders or radius -->
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:auto-rows-[200px] sm:gap-3 lg:auto-rows-[240px]">
      <ScrollReveal
        v-for="(photo, i) in wedding.gallery.photos"
        :key="i"
        animation="fade-in"
        :class="spanClass(i)"
      >
        <button
          type="button"
          class="block h-full w-full cursor-pointer overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          @click="openImg(photo)"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            class="aspect-square h-full w-full object-cover transition-all duration-500 hover:scale-105 sm:aspect-auto"
            loading="lazy"
            @error="onImgError"
          />
        </button>
      </ScrollReveal>
    </div>

    <!-- lightbox -->
    <div
      v-if="active"
      class="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      :aria-label="`Xem ảnh: ${active.alt}`"
      @click="close"
    >
      <button
        type="button"
        class="carousel-arrow absolute right-5 top-5"
        aria-label="Đóng"
        @click="close"
      >
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <img
        :src="active.src"
        :alt="active.alt"
        class="max-h-[85vh] max-w-full shadow-2xl"
      />
      <p class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-cream/20 px-5 py-2 text-sm text-cream backdrop-blur-md">
        {{ active.alt }}
      </p>
    </div>
  </section>
</template>

