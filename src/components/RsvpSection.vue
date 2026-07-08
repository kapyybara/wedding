<script setup lang="ts">
import { reactive, ref } from 'vue'
import { wedding, type RsvpForm } from '../data/wedding'
import { onImgError } from '../data/imageFallback'
import ScrollReveal from './ScrollReveal.vue'

const form = reactive<RsvpForm>({
  name: '',
  attendance: '',
  guests: 1,
  message: '',
})

const submitted = ref(false)
const error = ref('')

function submit() {
  error.value = ''
  if (!form.name.trim()) {
    error.value = 'Vui lòng nhập họ tên của bạn.'
    return
  }
  if (!form.attendance) {
    error.value = 'Vui lòng cho biết bạn có thể tham dự hay không.'
    return
  }
  try {
    const replies = JSON.parse(localStorage.getItem('rsvp-replies') || '[]')
    replies.push({ ...form, at: new Date().toISOString() })
    localStorage.setItem('rsvp-replies', JSON.stringify(replies))
  } catch {
    /* storage unavailable — ignore */
  }
  submitted.value = true
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
          <div v-if="submitted">
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
            <div>
              <label for="rsvp-name" class="block text-xs tracking-[0.2em] text-ink-muted uppercase">Họ và tên</label>
              <input
                id="rsvp-name"
                v-model="form.name"
                type="text"
                autocomplete="name"
                class="rsvp-input"
                placeholder="Nhập họ tên của bạn"
              />
            </div>

            <fieldset>
              <legend class="text-xs tracking-[0.2em] text-ink-muted uppercase">Bạn có thể tham dự chứ?</legend>
              <div class="mt-3 flex gap-3">
                <label
                  class="attend-chip"
                  :class="form.attendance === 'yes' && 'attend-chip--on'"
                >
                  <input v-model="form.attendance" type="radio" value="yes" class="sr-only" />
                  Vui lòng tham dự
                </label>
                <label
                  class="attend-chip"
                  :class="form.attendance === 'no' && 'attend-chip--on'"
                >
                  <input v-model="form.attendance" type="radio" value="no" class="sr-only" />
                  Rất tiếc không thể
                </label>
              </div>
            </fieldset>

            <div v-if="form.attendance === 'yes'">
              <label for="rsvp-guests" class="block text-xs tracking-[0.2em] text-ink-muted uppercase">Số người tham dự</label>
              <input
                id="rsvp-guests"
                v-model.number="form.guests"
                type="number"
                min="1"
                max="10"
                class="rsvp-input"
              />
            </div>

            <div>
              <label for="rsvp-msg" class="block text-xs tracking-[0.2em] text-ink-muted uppercase">Lời nhắn gửi</label>
              <textarea
                id="rsvp-msg"
                v-model="form.message"
                rows="3"
                class="rsvp-input resize-none"
                placeholder="Gửi lời chúc đến cô dâu chú rể"
              ></textarea>
            </div>

            <p v-if="error" class="text-sm text-[#A6483C]" role="alert">{{ error }}</p>

            <button type="submit" class="btn-primary w-full justify-center">Gửi xác nhận</button>
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
.rsvp-input {
  margin-top: 0.4rem;
  width: 100%;
  border: none;
  border-bottom: 1.5px solid var(--color-border-subtle);
  background: transparent;
  padding: 0.5rem 0.1rem;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--color-ink);
  outline: none;
  transition: border-color 200ms;
}
.rsvp-input::placeholder {
  color: var(--color-ink-muted);
  opacity: 0.5;
}
.rsvp-input:focus-visible {
  border-bottom-color: var(--color-gold);
  box-shadow: 0 1px 0 0 var(--color-gold);
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
</style>

