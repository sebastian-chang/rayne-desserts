<template>
  <div class="flavors">FLAVORS</div>
  <div v-if="!isLoading">
    {{ state.flavor.name }}
    <Item :flavor="state.flavor" />
  </div>
  <div v-else>...Loading</div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import Item from '../components/Item.vue'

export default {
  components: { Item },
  setup () {
    const state = reactive({
      flavor: null
    })
    const isLoading = ref(true)
    onMounted(async () => {
      const res = await fetch(`${process.env.VUE_APP_BASE_API}/flavors`)
      // flavors.value = await res.json()
      const data = await res.json()
      console.log('THIS IS DATA', data)
      state.flavor = await data[0]
      console.log('THIS IS AN ITEM', state.flavor)
      isLoading.value = false
    })
    return { state, isLoading }
  }
}
</script>

<style>
</style>
