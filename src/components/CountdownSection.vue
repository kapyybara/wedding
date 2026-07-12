<script setup lang="ts">
import { onMounted, onUnmounted, reactive, computed, watch } from 'vue'
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

// Flip-clock digit animation. Each digit position keeps a single persistent
// DOM node — we only toggle a class to replay the flip, rather than mounting
// new nodes per tick. That avoids leaving stale "leave" elements behind if a
// transitionend never fires (e.g. the tab was backgrounded while it counted).
const flipping = reactive<Record<string, boolean>>({})
const flipTimers: Record<string, number> = {}
let prevDigits: string[] = []

function digitsOf(list: { v: number }[]) {
  return list.flatMap((u) => pad(u.v).split(''))
}

function digitKeys(list: { v: number; l: string }[]) {
  return list.flatMap((u) => pad(u.v).split('').map((_, ci) => `${u.l}-${ci}`))
}

watch(
  units,
  (list) => {
    const next = digitsOf(list)
    const keys = digitKeys(list)
    next.forEach((ch, i) => {
      if (prevDigits[i] !== undefined && prevDigits[i] !== ch) {
        const key = keys[i]
        clearTimeout(flipTimers[key])
        flipping[key] = false
        requestAnimationFrame(() => {
          flipping[key] = true
          flipTimers[key] = window.setTimeout(() => {
            flipping[key] = false
          }, 500)
        })
      }
    })
    prevDigits = next
  },
  { immediate: true }
)

onUnmounted(() => Object.values(flipTimers).forEach((id) => clearTimeout(id)))
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
          <div class="flex justify-center font-display text-4xl font-light text-ink tabular-nums sm:text-6xl">
            <span
              v-for="(ch, ci) in pad(unit.v).split('')"
              :key="ci"
              class="digit-flip"
              :class="{ 'is-flipping': flipping[`${unit.l}-${ci}`] }"
            >{{ ch }}</span>
          </div>
          <div class="mt-2 text-[0.6875rem] tracking-[0.25em] text-ink-muted uppercase sm:text-xs">
            {{ unit.l }}
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
</template>

<style scoped>
.digit-flip {
  display: inline-block;
  width: 1ch;
  transform-origin: 50% 50%;
}
.digit-flip.is-flipping {
  animation: digit-flip 0.5s cubic-bezier(0.34, 1.15, 0.64, 1);
}
@keyframes digit-flip {
  0% {
    transform: translateY(0) rotateX(0deg);
    opacity: 1;
  }
  40% {
    transform: translateY(-35%) rotateX(70deg);
    opacity: 0.25;
  }
  55% {
    transform: translateY(35%) rotateX(-70deg);
    opacity: 0.25;
  }
  100% {
    transform: translateY(0) rotateX(0deg);
    opacity: 1;
  }
}
</style>
