<template>
  <div class="weddings">...Loading</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup () {
    const router = useRouter()
    const store = useStore()
    onMounted(() => {
      store.dispatch('themeChange', 'weddings')
      router.push({ name: 'Home' })
    })
  },
}
</script>

<style lang="scss" scoped>
</style>
