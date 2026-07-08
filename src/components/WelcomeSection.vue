<script setup lang="ts">
import { computed } from 'vue'
import { wedding } from '../data/wedding'
import { onImgError } from '../data/imageFallback'
import ScrollReveal from './ScrollReveal.vue'

const date = computed(() => new Date(wedding.weddingDate))
const weekday = computed(() =>
  new Intl.DateTimeFormat('vi-VN', { weekday: 'long' }).format(date.value)
)
const fullDate = computed(() =>
  new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date.value)
)
const time = computed(() =>
  new Intl.DateTimeFormat('vi-VN', { hour: '2-digit', minute: '2-digit' }).format(date.value)
)
</script>

<template>
  <section class="bg-cream section-padding">
    <div class="mx-auto grid max-w-5xl items-center gap-14 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:gap-16">
      <!-- Small offset portrait photo, left column, like the reference's asymmetric layout -->
      <ScrollReveal animation="slide-right">
        <div class="mx-auto max-w-xs sm:mx-0 sm:ml-auto">
          <img
            :src="wedding.photos.strip[0]"
            :alt="`${wedding.groom} và ${wedding.bride}`"
            class="aspect-[3/4] w-full object-cover"
            loading="lazy"
            @error="onImgError"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal animation="slide-left">
        <h2 class="font-display text-3xl leading-snug font-normal italic text-ink text-center sm:text-4xl sm:text-left">
          {{ wedding.tagline }}
        </h2>
        <p class="mt-6 leading-relaxed text-ink-muted">
          {{ wedding.welcome.body }}
        </p>

        <div class="mt-8 border-t border-border-subtle pt-6 text-sm leading-relaxed text-ink">
          <p class="capitalize">{{ weekday }}</p>
          <p>{{ fullDate }}</p>
          <p class="text-ink-muted">Lễ thành hôn bắt đầu lúc {{ time }}</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
