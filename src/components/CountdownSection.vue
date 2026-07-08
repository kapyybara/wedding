<script setup lang="ts">
import { onMounted, onUnmounted, reactive, computed } from 'vue'
import { wedding } from '../data/wedding'
import ScrollReveal from './ScrollReveal.vue'

const time = reactive({ days: 0, hours: 0, minutes: 0, seconds: 0, past: false })
let timer: number | undefined

function tick() {
  const diff = new Date(wedding.weddingDate).getTime() - Date.now()
  if (diff <= 0) {
    time.past = true
    time.days = time.hours = time.minutes = time.seconds = 0
    return
  }
  time.days = Math.floor(diff / 86400000)
  time.hours = Math.floor((diff % 86400000) / 3600000)
  time.minutes = Math.floor((diff % 3600000) / 60000)
  time.seconds = Math.floor((diff % 60000) / 1000)
}

onMounted(() => {
  tick()
  timer = window.setInterval(tick, 1000)
})
onUnmounted(() => window.clearInterval(timer))

const pad = (n: number) => String(n).padStart(2, '0')

const units = computed(() => [
  { v: time.days, l: 'Ngày' },
  { v: time.hours, l: 'Giờ' },
  { v: time.minutes, l: 'Phút' },
  { v: time.seconds, l: 'Giây' },
])
</script>

<template>
  <!-- Slim transitional band between the schedule and the story — kept
       compact rather than a full section, per the editorial pacing. -->
  <section class="bg-cream-dark px-6 py-14 text-center sm:py-16">
    <ScrollReveal animation="slide-up">
      <span class="eyebrow">{{ wedding.countdown.title }}</span>
      <p class="mt-4 font-display text-2xl italic text-ink-muted sm:text-3xl">{{ wedding.countdown.subtitle }}</p>
    </ScrollReveal>

    <p v-if="time.past" class="mt-10 font-display text-4xl italic text-gold">
      Chúng mình đã về chung một nhà!
    </p>

    <ScrollReveal v-else animation="zoom-in">
      <div class="mx-auto mt-10 flex max-w-xl items-start justify-center divide-x divide-border-subtle">
        <div
          v-for="unit in units"
          :key="unit.l"
          class="flex-1 px-2 text-center sm:px-4"
        >
          <div class="font-display text-4xl font-light text-ink tabular-nums sm:text-6xl">
            {{ pad(unit.v) }}
          </div>
          <div class="mt-2 text-[0.6875rem] tracking-[0.25em] text-ink-muted uppercase sm:text-xs">
            {{ unit.l }}
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
</template>

