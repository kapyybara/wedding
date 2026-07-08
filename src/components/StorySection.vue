<script setup lang="ts">
import { wedding } from '../data/wedding'
import { onImgError } from '../data/imageFallback'
import ScrollReveal from './ScrollReveal.vue'
</script>

<template>
  <!-- Alternating full-bleed photo / cream text panels — the same editorial
       grammar as the welcome and schedule blocks, repeated per milestone. -->
  <section class="bg-cream">
    <div class="py-20 text-center sm:py-24">
      <ScrollReveal animation="slide-up">
        <span class="eyebrow">{{ wedding.story.title }}</span>
        <p class="mt-3 font-display text-2xl italic text-ink-muted sm:text-3xl">{{ wedding.story.subtitle }}</p>
      </ScrollReveal>
    </div>

    <div
      v-for="(m, i) in wedding.story.milestones"
      :key="i"
      class="grid sm:grid-cols-2"
    >
      <ScrollReveal
        :animation="i % 2 === 0 ? 'slide-right' : 'slide-left'"
        :class="i % 2 === 1 && 'sm:order-2'"
      >
        <img
          :src="m.photo"
          :alt="m.heading"
          class="h-[60vh] min-h-[380px] w-full object-cover sm:h-full sm:min-h-[520px]"
          loading="lazy"
          @error="onImgError"
        />
      </ScrollReveal>

      <ScrollReveal
        :animation="i % 2 === 0 ? 'slide-left' : 'slide-right'"
        :class="[i % 2 === 0 ? 'bg-cream' : 'bg-cream-dark', i % 2 === 1 && 'sm:order-1']"
      >
        <div class="flex h-full flex-col items-center justify-center px-8 py-16 text-center sm:px-14">
          <p class="corner-label text-ink-muted">{{ m.date }}</p>
          <h3 class="mt-4 font-display text-3xl italic text-ink sm:text-4xl">{{ m.heading }}</h3>
          <p class="mt-5 max-w-sm leading-relaxed text-ink-muted">{{ m.text }}</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
