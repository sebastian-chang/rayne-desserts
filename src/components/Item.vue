<template>
  <div class="item-card">
    ITEM
    {{ props.name }}
  </div>
</template>

<script>
export default {
  props: ['flavor'],
  setup (props) {
    console.log('THIS IS PROPS', props.flavor.name)
    return { props: props.flavor }
  }
}
</script>

<style>
</style>
