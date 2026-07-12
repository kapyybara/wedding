<script setup lang="ts">
import { wedding } from '../data/wedding'
import ScrollReveal from './ScrollReveal.vue'
</script>

<template>
  <footer class="bg-cream-dark section-padding text-center">
    <ScrollReveal animation="fade-in">
      <!-- Monogram — groom & bride short names -->
      <div class="mx-auto flex items-center justify-center">
        <span class="font-script text-5xl text-ink">
          {{ wedding.groomShort }} và {{ wedding.brideShort }}
        </span>
      </div>
      <h2 class="mt-6 font-script text-5xl text-ink">{{ wedding.thankYou.title }}</h2>
      <p class="mx-auto mt-4 max-w-md leading-relaxed text-ink-muted">
        {{ wedding.thankYou.body }}
      </p>
      <p class="mt-6 font-display text-lg tracking-[0.15em] text-ink">
        {{ wedding.signature }}
      </p>
      <p class="mt-1 text-sm text-ink-muted">{{ wedding.dateLabel }}</p>

      <div class="divider-ornament mx-auto mt-10 max-w-xs">
        <span class="ornament-dot"></span>
      </div>

      <p class="mt-6 text-xs text-ink-muted/60">
        Made with ♥ from Phương Vy &amp; Nhật Tiến
      </p>
    </ScrollReveal>
  </footer>
</template>

