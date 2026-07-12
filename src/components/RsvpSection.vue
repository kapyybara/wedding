<script setup lang="ts">
import { reactive, ref } from 'vue'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { wedding, type RsvpForm } from '../data/wedding'
import ScrollReveal from './ScrollReveal.vue'

const form = reactive<RsvpForm>({
  name: '',
  attendance: '',
  guests: 1,
  message: '',
})

const submitted = ref(false)
const submitting = ref(false)
const error = ref('')

const petals = ref<{ id: number; dx: number; dy: number; rot: number; delay: number }[]>([])

function burstPetals() {
  petals.value = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    dx: Math.round((Math.random() - 0.5) * 220),
    dy: Math.round(-60 - Math.random() * 140),
    rot: Math.round((Math.random() - 0.5) * 240),
    delay: Math.round(Math.random() * 150),
  }))
}

async function submit() {
  error.value = ''
  if (!form.name.trim()) {
    error.value = 'Vui lòng nhập họ tên của bạn.'
    return
  }
  if (!form.attendance) {
    error.value = 'Vui lòng cho biết bạn có thể tham dự hay không.'
    return
  }

  submitting.value = true
  try {
    await addDoc(collection(db, 'rsvps'), {
      name: form.name.trim(),
      attendance: form.attendance,
      guests: form.attendance === 'yes' ? form.guests : 0,
      message: form.message.trim(),
      createdAt: serverTimestamp(),
    })
    submitted.value = true
    burstPetals()
  } catch {
    error.value = 'Không thể gửi xác nhận lúc này, bạn vui lòng thử lại nhé.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="bg-cream section-padding">
    <div class="mx-auto max-w-2xl text-center">
      <ScrollReveal animation="slide-up">
        <span class="eyebrow">{{ wedding.rsvp.title }}</span>
        <p class="mt-3 font-display text-2xl italic text-ink-muted sm:text-3xl">{{ wedding.rsvp.intro }}</p>
      </ScrollReveal>

      <!-- Open, borderless form — no bounding card, thin rule above/below like the rest of the site -->
      <ScrollReveal animation="slide-up">
        <div class="mx-auto mt-12 max-w-md border-t border-border-subtle pt-10">
          <!-- success state -->
          <div v-if="submitted" class="relative">
            <span
              v-for="p in petals"
              :key="p.id"
              class="petal pointer-events-none absolute left-1/2 top-0"
              :style="{ '--dx': `${p.dx}px`, '--dy': `${p.dy}px`, '--rot': `${p.rot}deg`, animationDelay: `${p.delay}ms` }"
              aria-hidden="true"
            ></span>
            <p class="font-display text-2xl text-ink">Cảm ơn bạn, {{ form.name }}!</p>
            <p class="mt-3 text-ink-muted">
              {{
                form.attendance === 'yes'
                  ? 'Chúng mình rất háo hức được gặp bạn trong ngày trọng đại!'
                  : 'Chúng mình sẽ nhớ bạn, cảm ơn bạn đã phản hồi nhé.'
              }}
            </p>
          </div>

          <!-- form -->
          <form v-else class="space-y-6 text-left" @submit.prevent="submit" novalidate>
            <div class="field-float">
              <input id="rsvp-name" v-model="form.name" type="text" autocomplete="name" class="rsvp-input"
                placeholder=" " />
              <label for="rsvp-name" class="field-label">Họ và tên</label>
            </div>

            <fieldset>
              <legend class="text-xs tracking-[0.2em] text-ink-muted uppercase">Bạn có thể tham dự chứ?</legend>
              <div class="mt-3 flex gap-3">
                <label class="attend-chip" :class="form.attendance === 'yes' && 'attend-chip--on'">
                  <input v-model="form.attendance" type="radio" value="yes" class="sr-only" />
                  Vui lòng tham dự
                </label>
                <label class="attend-chip" :class="form.attendance === 'no' && 'attend-chip--on'">
                  <input v-model="form.attendance" type="radio" value="no" class="sr-only" />
                  Rất tiếc không thể
                </label>
              </div>
            </fieldset>

            <div v-if="form.attendance === 'yes'" class="field-float">
              <input id="rsvp-guests" v-model.number="form.guests" type="number" min="1" max="10" class="rsvp-input"
                placeholder=" " />
              <label for="rsvp-guests" class="field-label">Số người tham dự</label>
            </div>

            <div class="field-float">
              <textarea id="rsvp-msg" v-model="form.message" rows="3" class="rsvp-input resize-none"
                placeholder=" "></textarea>
              <label for="rsvp-msg" class="field-label">Lời nhắn gửi</label>
            </div>

            <p v-if="error" class="text-sm text-[#A6483C]" role="alert">{{ error }}</p>

            <button type="submit" class="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-50" :disabled="submitting">
              {{ submitting ? 'Đang gửi...' : 'Gửi xác nhận' }}
            </button>
          </form>

          <p class="mt-8 border-t border-border-subtle pt-6 text-sm leading-relaxed text-ink-muted">
            {{ wedding.rsvp.deadlineNote }}
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.field-float {
  position: relative;
}

.rsvp-input {
  width: 100%;
  border: none;
  border-bottom: 1.5px solid var(--color-border-subtle);
  background: transparent;
  padding: 1.35rem 0.1rem 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--color-ink);
  outline: none;
  transition: border-color 200ms;
}

.rsvp-input::placeholder {
  color: transparent;
}

.rsvp-input:focus-visible {
  border-bottom-color: var(--color-gold);
  box-shadow: 0 1px 0 0 var(--color-gold);
}

.field-label {
  position: absolute;
  left: 0.1rem;
  top: 1.4rem;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--color-ink-muted);
  opacity: 0.6;
  letter-spacing: normal;
  text-transform: none;
  pointer-events: none;
  transform-origin: left top;
  transition: transform 200ms ease, color 200ms ease, opacity 200ms ease;
}

.rsvp-input:focus + .field-label,
.rsvp-input:not(:placeholder-shown) + .field-label {
  transform: translateY(-1.15rem) scale(0.74);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 1;
}

.rsvp-input:focus + .field-label {
  color: var(--color-gold);
}

.attend-chip {
  cursor: pointer;
  flex: 1 1 0;
  border: 1.5px solid var(--color-border-subtle);
  padding: 0.5rem 0.75rem;
  text-align: center;
  font-size: 0.875rem;
  font-family: var(--font-sans);
  color: var(--color-ink-muted);
  transition: all 200ms;
}

.attend-chip:hover {
  border-color: var(--color-gold);
}

.attend-chip:focus-within {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

.attend-chip--on {
  background: var(--color-ink);
  color: var(--color-cream);
  border-color: var(--color-ink);
}

.petal {
  width: 10px;
  height: 14px;
  background: var(--color-gold-light);
  border-radius: 0 100% 0 100%;
  opacity: 0;
  animation: petal-burst 1.1s ease-out forwards;
}
@keyframes petal-burst {
  0% {
    transform: translate(-50%, 0) rotate(0deg) scale(0.4);
    opacity: 0;
  }
  15% {
    opacity: 0.9;
  }
  100% {
    transform: translate(calc(-50% + var(--dx)), var(--dy)) rotate(var(--rot)) scale(1);
    opacity: 0;
  }
}
</style>
