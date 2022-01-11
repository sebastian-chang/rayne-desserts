<template>
  <div class="accordion-card" v-for="pane in panes" :key="pane.id">
    <Pane :pane="pane" />
  </div>
</template>

<script>
import Pane from './AccordionPane.vue'
export default {
  props: ['panes'],
  components: { Pane },
}
</script>

<style lang="scss" scoped>
</style>
