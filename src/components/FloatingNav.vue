<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { wedding } from '../data/wedding'

const sections = wedding.nav.items

const activeId = ref('')
const scrollerRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null
let resizeObserver: ResizeObserver | null = null

const pillStyle = reactive({ transform: 'translateX(0px)', width: '0px', opacity: '0' })

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

function updatePill() {
  const scroller = scrollerRef.value
  const activeBtn = scroller?.querySelector<HTMLElement>('[data-active="true"]')
  if (!scroller || !activeBtn) return
  pillStyle.transform = `translateX(${activeBtn.offsetLeft}px)`
  pillStyle.width = `${activeBtn.offsetWidth}px`
  pillStyle.opacity = '1'
}

watch(activeId, () => nextTick(() => {
  centerActiveTab()
  updatePill()
}))

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

  if (scrollerRef.value) {
    resizeObserver = new ResizeObserver(() => updatePill())
    resizeObserver.observe(scrollerRef.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
  resizeObserver?.disconnect()
})
</script>

<template>
  <nav
    class="fixed left-1/2 z-50 max-w-[calc(100vw-1.5rem)] -translate-x-1/2 border border-border-subtle bg-cream/90 backdrop-blur-xl transition-all duration-300"
    style="top: 12px"
    aria-label="Điều hướng nhanh"
  >
    <ul
      ref="scrollerRef"
      class="relative flex w-max max-w-[calc(100vw-1.5rem)] items-center gap-0.5 overflow-x-auto scrollbar-hide px-3 py-1"
      style="mask-image: linear-gradient(to right, transparent 0, black 16px, black calc(100% - 16px), transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0, black 16px, black calc(100% - 16px), transparent 100%)"
    >
      <li
        class="nav-pill pointer-events-none absolute inset-y-1 left-0 bg-ink"
        :style="pillStyle"
        aria-hidden="true"
      ></li>
      <li v-for="item in sections" :key="item.id" class="relative shrink-0">
        <button
          type="button"
          class="relative cursor-pointer whitespace-nowrap px-3 py-1.5 text-xs tracking-[0.1em] uppercase transition-colors duration-200 sm:px-4 sm:text-xs font-sans"
          :data-active="activeId === item.id"
          :class="
            activeId === item.id
              ? 'text-cream'
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

<style scoped>
.nav-pill {
  transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1), width 0.35s cubic-bezier(0.65, 0, 0.35, 1),
    opacity 0.2s ease;
}
</style>
