<script setup lang="ts">
import { ref } from 'vue'
import { wedding } from '../data/wedding'
import ScrollReveal from './ScrollReveal.vue'

// closed → box sits idle · opening → lid animation plays · open → fullscreen QR
type Phase = 'closed' | 'opening' | 'open'
const phase = ref<Phase>('closed')

function openBox() {
  if (phase.value !== 'closed') return
  phase.value = 'opening'
  // reveal the fullscreen image once the lid has flown off
  window.setTimeout(() => (phase.value = 'open'), 720)
}

function close() {
  phase.value = 'closed'
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

      <ScrollReveal animation="fade-in">
        <div class="mt-12 flex flex-col items-center">
          <button
            type="button"
            class="gift-trigger"
            :class="{ 'is-opening': phase !== 'closed' }"
            aria-label="Mở hộp mừng cưới"
            @click="openBox"
          >
            <span class="gift-box" aria-hidden="true">
              <span class="gift-glow"></span>
              <span class="gift-lid">
                <span class="gift-bow"></span>
              </span>
              <span class="gift-body">
                <span class="gift-ribbon"></span>
              </span>
              <span class="gift-sparkle gift-sparkle-1"></span>
              <span class="gift-sparkle gift-sparkle-2"></span>
              <span class="gift-sparkle gift-sparkle-3"></span>
            </span>
          </button>
          <span class="mt-6 text-sm tracking-wide text-ink-muted">
            {{ wedding.gift.qrCaption }}
          </span>
        </div>
      </ScrollReveal>
    </div>

    <!-- Fullscreen QR viewer -->
    <transition name="lightbox-fade">
      <div
        v-if="phase === 'open'"
        class="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        :aria-label="wedding.gift.qrCaption"
        @click="close"
      >
        <button
          type="button"
          class="carousel-arrow absolute right-5 top-5"
          aria-label="Đóng"
          @click.stop="close"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <img
          :src="wedding.gift.qrImage"
          :alt="wedding.gift.qrCaption"
          class="qr-pop max-h-[90vh] max-w-full rounded-lg shadow-2xl"
          @click.stop
        />
      </div>
    </transition>
  </section>
</template>

<style scoped>
.gift-trigger {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  background: none;
  border: 0;
  padding: 1rem;
  outline: none;
}
.gift-trigger:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
  border-radius: 8px;
}

.gift-box {
  position: relative;
  display: block;
  width: 132px;
  height: 132px;
  transform-origin: bottom center;
  animation: gift-idle 3.2s ease-in-out infinite;
  transition: transform 0.3s ease;
}
.gift-trigger:hover .gift-box {
  transform: translateY(-4px) scale(1.03);
}
.gift-trigger.is-opening .gift-box {
  animation: gift-shake 0.4s ease-in-out;
}

/* Box body */
.gift-body {
  position: absolute;
  bottom: 0;
  left: 12px;
  width: 108px;
  height: 84px;
  background: linear-gradient(160deg, var(--color-forest), var(--color-forest-dark));
  border-radius: 4px;
  box-shadow: 0 14px 30px -12px rgba(35, 40, 27, 0.6);
}
/* Vertical ribbon down the body */
.gift-ribbon {
  position: absolute;
  top: 0;
  left: 50%;
  width: 20px;
  height: 100%;
  transform: translateX(-50%);
  background: var(--color-cream);
  opacity: 0.92;
}

/* Lid */
.gift-lid {
  position: absolute;
  top: 26px;
  left: 0;
  width: 132px;
  height: 34px;
  background: linear-gradient(160deg, var(--color-forest), var(--color-forest-dark));
  border-radius: 5px;
  border-bottom: 2px solid var(--color-gold-light);
  box-shadow: 0 6px 14px -6px rgba(35, 40, 27, 0.55);
  transform-origin: center bottom;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease;
  z-index: 2;
}
/* Bow on the lid */
.gift-bow {
  position: absolute;
  top: -17px;
  left: 50%;
  width: 44px;
  height: 24px;
  transform: translateX(-50%);
}
.gift-bow::before,
.gift-bow::after {
  content: '';
  position: absolute;
  top: 0;
  width: 22px;
  height: 24px;
  background: var(--color-cream);
  border-radius: 50% 50% 50% 50% / 70% 70% 40% 40%;
}
.gift-bow::before {
  left: 0;
  transform: rotate(-18deg);
  transform-origin: bottom right;
}
.gift-bow::after {
  right: 0;
  transform: rotate(18deg);
  transform-origin: bottom left;
}

/* Opening: lid lifts, tilts and flies off */
.gift-trigger.is-opening .gift-lid {
  transform: translateY(-46px) rotate(-14deg);
  opacity: 0;
}

/* Soft glow behind the box when it opens */
.gift-glow {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 150px;
  height: 150px;
  transform: translate(-50%, -50%) scale(0.4);
  background: radial-gradient(circle, rgba(245, 241, 233, 0.9) 0%, rgba(245, 241, 233, 0) 68%);
  opacity: 0;
  pointer-events: none;
}
.gift-trigger.is-opening .gift-glow {
  animation: gift-burst 0.72s ease-out;
}

/* Sparkles */
.gift-sparkle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--color-cream);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.gift-sparkle-1 { top: 20px; left: 20px; }
.gift-sparkle-2 { top: 8px; left: 96px; }
.gift-sparkle-3 { top: 40px; left: 108px; }
.gift-trigger.is-opening .gift-sparkle-1 { animation: gift-spark 0.7s ease-out 0.05s; }
.gift-trigger.is-opening .gift-sparkle-2 { animation: gift-spark 0.7s ease-out 0.12s; }
.gift-trigger.is-opening .gift-sparkle-3 { animation: gift-spark 0.7s ease-out 0.18s; }

@keyframes gift-idle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
@keyframes gift-shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-4deg); }
  75% { transform: rotate(4deg); }
}
@keyframes gift-burst {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.4); }
  45% { opacity: 1; }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
}
@keyframes gift-spark {
  0% { opacity: 0; transform: translateY(0) scale(0.4); }
  40% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-26px) scale(1.1); }
}

/* Image pop-in inside the lightbox */
.qr-pop {
  animation: qr-pop-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes qr-pop-in {
  0% { opacity: 0; transform: scale(0.85); }
  100% { opacity: 1; transform: scale(1); }
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .gift-box { animation: none; }
  .gift-lid { transition: opacity 0.3s ease; }
  .gift-trigger.is-opening .gift-lid { transform: none; }
  .gift-sparkle, .gift-glow, .qr-pop { animation: none !important; }
}
</style>
