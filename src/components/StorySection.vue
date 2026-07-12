<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { wedding } from '../data/wedding'
import { onImgError } from '../data/imageFallback'
import ScrollReveal from './ScrollReveal.vue'

const timelineRef = ref<HTMLElement | null>(null)
const vineProgress = ref(0)

function onScroll() {
  const el = timelineRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const winH = window.innerHeight
  // 0 when the timeline's top reaches the viewport center, 1 when its
  // bottom passes the viewport center — grows the vine as you read through.
  const total = rect.height + winH * 0.5
  const covered = winH * 0.5 - rect.top
  vineProgress.value = Math.min(Math.max(covered / total, 0), 1)
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
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

    <div ref="timelineRef" class="relative">
      <!-- Center vine — desktop only, grows with scroll progress through the milestones -->
      <div class="vine-track pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-border-subtle sm:block" aria-hidden="true">
        <div class="vine-fill w-full bg-gold transition-[height] duration-150 ease-out" :style="{ height: `${vineProgress * 100}%` }" />
      </div>

    <div
      v-for="(m, i) in wedding.story.milestones"
      :key="i"
      class="relative grid sm:grid-cols-2"
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
    </div>
  </section>
</template>
