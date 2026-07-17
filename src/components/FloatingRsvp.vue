<script setup lang="ts">
function scrollToRsvp() {
  const el = document.getElementById('rsvp')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <button
    type="button"
    class="group fixed bottom-6 right-1/2 z-50 flex translate-x-1/2 cursor-pointer items-center gap-2 rounded-full border border-rose-gold/40 bg-cream/90 px-5 py-3 font-sans text-xs font-semibold tracking-[0.12em] text-rose-gold uppercase shadow-lg shadow-rose-gold/15 backdrop-blur-xl transition-all duration-300 hover:bg-rose-gold/15 hover:shadow-xl hover:shadow-rose-gold/30 hover:scale-105 active:scale-95"
    aria-label="Xác nhận tham dự"
    @click="scrollToRsvp"
  >
    <svg class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Xác nhận tham dự</span>
    <svg class="h-3 w-3 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </button>
</template>
