<script setup lang="ts">
import { ref } from 'vue'
import { wedding } from '../data/wedding'
import ScrollReveal from './ScrollReveal.vue'

const copied = ref<number | null>(null)

async function copyNumber(num: string, i: number) {
  try {
    await navigator.clipboard.writeText(num.replace(/\s/g, ''))
    copied.value = i
    window.setTimeout(() => (copied.value = null), 1800)
  } catch {
    /* clipboard không khả dụng */
  }
}
</script>

<template>
  <section class="bg-cream section-padding">
    <div class="mx-auto max-w-2xl text-center">
      <ScrollReveal animation="slide-up">
        <span class="eyebrow">{{ wedding.gift.title }}</span>
        <p class="mx-auto mt-5 max-w-xl leading-relaxed text-ink-muted">
          {{ wedding.gift.body }}
        </p>
      </ScrollReveal>

      <div class="mx-auto mt-12 max-w-md divide-y divide-border-subtle border-t border-b border-border-subtle">
        <ScrollReveal
          v-for="(acc, i) in wedding.gift.accounts"
          :key="i"
          animation="fade-in"
        >
          <div class="flex flex-col items-center gap-1 py-7 text-center">
            <p class="font-display text-lg font-semibold text-ink">{{ acc.owner }}</p>
            <p class="text-sm text-ink-muted">{{ acc.bank }}</p>
            <p class="font-display text-xl tracking-wider text-gold tabular-nums">
              {{ acc.number }}
            </p>
            <button
              type="button"
              class="mt-3 inline-flex cursor-pointer items-center gap-2 border border-border-subtle px-4 py-1.5 text-sm text-ink transition-colors duration-200 hover:bg-ink/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              @click="copyNumber(acc.number, i)"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" />
              </svg>
              {{ copied === i ? 'Đã sao chép!' : 'Sao chép số TK' }}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

