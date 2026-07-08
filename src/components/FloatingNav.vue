<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { wedding } from '../data/wedding'

const sections = wedding.nav.items

const activeId = ref('')
const scrollerRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function centerActiveTab() {
  const scroller = scrollerRef.value
  const activeBtn = scroller?.querySelector<HTMLElement>('[data-active="true"]')
  if (!scroller || !activeBtn) return
  const target =
    activeBtn.offsetLeft - scroller.clientWidth / 2 + activeBtn.clientWidth / 2
  scroller.scrollTo({ left: target, behavior: 'smooth' })
}

watch(activeId, () => nextTick(centerActiveTab))

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      }
    },
    { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
  )

  sections.forEach((s) => {
    const el = document.getElementById(s.id)
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <nav
    class="fixed left-1/2 z-50 max-w-[calc(100vw-1.5rem)] -translate-x-1/2 border border-border-subtle bg-cream/90 backdrop-blur-xl transition-all duration-300"
    style="top: 12px"
    aria-label="Điều hướng nhanh"
  >
    <ul
      ref="scrollerRef"
      class="flex w-max max-w-[calc(100vw-1.5rem)] items-center gap-0.5 overflow-x-auto scrollbar-hide px-3 py-1"
      style="mask-image: linear-gradient(to right, transparent 0, black 16px, black calc(100% - 16px), transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0, black 16px, black calc(100% - 16px), transparent 100%)"
    >
      <li v-for="item in sections" :key="item.id" class="shrink-0">
        <button
          type="button"
          class="cursor-pointer whitespace-nowrap px-3 py-1.5 text-xs tracking-[0.1em] uppercase transition-all duration-200 sm:px-4 sm:text-xs font-sans"
          :data-active="activeId === item.id"
          :class="
            activeId === item.id
              ? 'bg-ink text-cream'
              : 'text-ink-muted hover:bg-ink/5 hover:text-ink'
          "
          @click="scrollTo(item.id)"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

