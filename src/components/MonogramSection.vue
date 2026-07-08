<script setup lang="ts">
import { wedding } from '../data/wedding'
import { onImgError } from '../data/imageFallback'
</script>

<template>
  <section class="relative flex h-[60vh] min-h-[420px] items-center justify-center overflow-hidden">
    <img
      :src="wedding.photos.monogram"
      alt="Nhật Tiến và Phương Vy trên bãi biển"
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
      @error="onImgError"
    />
    <div class="absolute inset-0 bg-ink/45"></div>
    <span
      class="relative font-script text-7xl text-cream [text-shadow:0_2px_20px_rgba(0,0,0,0.4)] sm:text-9xl"
    >
      {{ wedding.groom.charAt(0) }} &amp; {{ wedding.bride.charAt(0) }}
    </span>
  </section>
</template>
