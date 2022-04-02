import { computed, onMounted, onUnmounted, ref } from 'vue'

export default function () {
  let windowWidth = ref(window.innerWidth)

  const onWidthChange = () => windowWidth.value = window.innerWidth

  onMounted(() => window.addEventListener('reize', onWidthChange))
  onUnmounted(() => window.removeEventListener('reize', onWidthChange))

  const windowType = computed(() => {
    if (windowWidth.value < 576) return 'xs'
    if (windowWidth.value >= 576 && windowWidth.value < 768) return 'sm'
    if (windowWidth.value >= 768 && windowWidth.value < 992) return 'md'
    if (windowWidth.value >= 992 && windowWidth.value < 1200) return 'lg'
    if (windowWidth.value >= 1200 && windowWidth.value < 1400) return 'xl'
    if (windowWidth.value >= 1400) return 'xxl'
    return null
  })

  const width = computed(() => windowWidth.value)

  return { width, windowType }
}
