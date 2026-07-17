<script setup lang="ts">
import { wedding } from '../data/wedding'
import ScrollReveal from './ScrollReveal.vue'
</script>

<template>
  <section id="contact" class="bg-cream-dark section-padding snap-anchor">
    <div class="mx-auto max-w-2xl text-center">
      <ScrollReveal animation="slide-up">
        <span class="eyebrow">{{ wedding.contact.title }}</span>
        <p class="mx-auto mt-5 max-w-xl leading-relaxed text-ink-muted">
          {{ wedding.contact.subtitle }}
        </p>
      </ScrollReveal>

      <ScrollReveal animation="fade-in">
        <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <a
            v-for="phone in wedding.contact.phones"
            :key="phone.number"
            :href="`https://zalo.me/${phone.number}`"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-chip group inline-flex items-center gap-4 rounded-full border border-border-subtle bg-cream px-8 py-5 shadow-sm transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/10"
          >
            <!-- Zalo icon -->
            <span class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0180C7] to-[#0068A5] text-white shadow-md shadow-[#0180C7]/25 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.76 13.5h-1.5v-7h1.5v7zm2.5-3.5h-1.5v-3.5h1.5V12zm2.5-2h-1.5V8h1.5v2z"/>
              </svg>
            </span>

            <div class="text-left">
              <p class="text-xs tracking-[0.2em] text-ink-muted uppercase">
                {{ phone.label }}
              </p>
              <p class="font-display text-xl tracking-wide text-ink transition-colors group-hover:text-[#0180C7]">
                {{ phone.number }}
              </p>
            </div>

            <!-- Arrow -->
            <svg class="h-5 w-5 text-ink-muted/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <p class="mt-4 text-xs text-ink-muted/50">
          Nhấn để mở Zalo và kết nối với tụi mình
        </p>
      </ScrollReveal>

      <div class="divider-ornament mx-auto mt-12 max-w-xs">
        <span class="ornament-dot"></span>
      </div>
    </div>
  </section>
</template>
