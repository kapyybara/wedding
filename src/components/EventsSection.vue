<script setup lang="ts">
import { wedding } from '../data/wedding'
import { onImgError } from '../data/imageFallback'
import ScrollReveal from './ScrollReveal.vue'
</script>

<template>
  <!-- Dark full-bleed schedule, flanked by portrait photos with a vertical-rule
       timeline down the middle — mirrors the reference's "Wedding Day Schedule". -->
  <section class="relative overflow-hidden bg-forest-dark text-cream">
    <div class="mx-auto grid max-w-6xl sm:grid-cols-[1fr_1.3fr_1fr]">
      <img
        :src="wedding.photos.strip[1]"
        alt=""
        class="hidden h-full min-h-[520px] w-full object-cover sm:block"
        loading="lazy"
        @error="onImgError"
      />

      <div class="relative px-6 py-16 sm:px-10 sm:py-20">
        <ScrollReveal animation="fade-in">
          <span class="eyebrow text-cream/70">{{ wedding.events.title }}</span>
          <h2 class="mt-3 font-display text-3xl italic sm:text-4xl">{{ wedding.events.subtitle }}</h2>
        </ScrollReveal>

        <ol class="relative mt-12 space-y-10 border-l border-cream/25 pl-8">
          <ScrollReveal
            v-for="(ev, i) in wedding.events.items"
            :key="i"
            animation="slide-up"
          >
            <li class="relative">
              <span class="absolute -left-[calc(2rem+1px)] top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cream" aria-hidden="true"></span>
              <p class="font-display text-2xl">{{ ev.time }}</p>
              <p class="mt-1 font-display text-lg italic text-cream/90">{{ ev.name }} — {{ ev.side }}</p>
              <p class="mt-1 text-sm text-cream/60">{{ ev.venue }}, {{ ev.address }}</p>
              <a
                :href="ev.mapUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-2 inline-block text-xs tracking-[0.15em] text-cream/70 underline decoration-cream/30 underline-offset-4 transition-colors hover:text-cream"
              >
                Xem bản đồ
              </a>
            </li>
          </ScrollReveal>
        </ol>
      </div>

      <img
        :src="wedding.photos.strip[2]"
        alt=""
        class="hidden h-full min-h-[520px] w-full object-cover sm:block"
        loading="lazy"
        @error="onImgError"
      />
    </div>
  </section>
</template>

