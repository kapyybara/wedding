import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(threshold = 0.15) {
  const observer = ref<IntersectionObserver | null>(null)

  function observe(el: Element) {
    if (!observer.value) return
    observer.value.observe(el)
  }

  function disconnect() {
    observer.value?.disconnect()
  }

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )
  })

  onUnmounted(() => disconnect())

  return { observe, disconnect }
}
