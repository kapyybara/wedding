<script setup lang="ts">
import { wedding } from '../data/wedding'
import ScrollReveal from './ScrollReveal.vue'

const iconMap: Record<string, string> = {
  departure: '🚌',
  arrival: '📍',
  return: '🚌',
}
</script>

<template>
  <section class="relative overflow-hidden bg-cream">
    <!-- Decorative top edge -->
    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent" />

    <div class="mx-auto max-w-3xl px-6 py-20 sm:px-10 sm:py-28">
      <ScrollReveal animation="fade-in">
        <div class="text-center">
          <span class="eyebrow text-rose-gold">{{ wedding.itinerary.title }}</span>
          <h2 class="mt-3 font-display text-3xl italic text-forest-dark sm:text-4xl">
            {{ wedding.itinerary.subtitle }}
          </h2>
          <p class="mt-2 font-display text-lg text-forest-dark/60">{{ wedding.itinerary.date }}</p>
        </div>
      </ScrollReveal>

      <!-- Timeline -->
      <div class="relative mt-14">
        <!-- Vertical line -->
        <!-- Vertical line through all icon centers -->
        <div class="absolute left-6 top-0 bottom-0 w-px bg-rose-gold/20 sm:left-1/2 sm:-translate-x-px" aria-hidden="true" />

        <ol class="relative space-y-12">
          <ScrollReveal
            v-for="(stop, i) in wedding.itinerary.items"
            :key="i"
            animation="slide-up"
            :style="{ animationDelay: `${i * 150}ms` }"
          >
            <li
              class="relative grid gap-6 sm:gap-10"
              :class="i % 2 === 0 ? 'sm:grid-cols-[1fr_auto_1fr]' : 'sm:grid-cols-[1fr_auto_1fr]'"
            >
              <!-- Content (left on even, right on odd on desktop) -->
              <div
                class="ml-14 sm:ml-0"
                :class="[
                  i % 2 === 0 ? 'sm:text-right sm:col-start-1 sm:col-end-2 sm:row-start-1' : 'sm:col-start-3 sm:col-end-4 sm:row-start-1',
                ]"
              >
                <p class="font-display text-3xl italic text-rose-gold">{{ stop.time }}</p>
                <p class="mt-1 font-display text-lg font-medium text-forest-dark">{{ stop.label }}</p>
                <p class="mt-0.5 text-sm text-forest-dark/70">{{ stop.location }}</p>
                <p class="text-xs text-forest-dark/40">{{ stop.address }}</p>
                <a
                  :href="stop.mapUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-2 inline-flex items-center gap-1 text-xs tracking-[0.12em] text-rose-gold/80 underline decoration-rose-gold/30 underline-offset-4 transition-colors hover:text-rose-gold"
                >
                  <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Xem bản đồ
                </a>
              </div>

              <!-- Timeline dot -->
              <div class="absolute left-0 top-0 sm:static sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:flex sm:justify-center">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full text-xl shadow-md sm:h-14 sm:w-14 sm:text-2xl"
                  :class="stop.icon === 'departure' ? 'bg-forest-dark text-cream' : stop.icon === 'arrival' ? 'bg-rose-gold text-white' : 'bg-rose-gold/70 text-white'"
                >
                  {{ iconMap[stop.icon] }}
                </div>
              </div>

              <!-- Spacer for alternating layout -->
              <div class="hidden sm:block" :class="i % 2 === 0 ? 'sm:col-start-3' : 'sm:col-start-1'" />
            </li>
          </ScrollReveal>
        </ol>
      </div>

      <!-- Footer note -->
      <ScrollReveal animation="fade-in">
        <p class="mt-14 text-center text-sm italic text-forest-dark/50">
          Xe sẽ đón khách tại Bến xe Miền Đông cũ lúc 5:00 sáng. Vui lòng có mặt trước 15 phút ạ.
        </p>
      </ScrollReveal>
    </div>

    <!-- Decorative bottom edge -->
    <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent" />
  </section>
</template>
