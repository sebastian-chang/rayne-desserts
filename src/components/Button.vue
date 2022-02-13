<template>
  <div :class="`rayne-${this.$store.state.theme}`">
  <button class="my-button" :style="cssVars()">{{ label }}</button>
  </div>
</template>

<script>
export default {
  props: ['label', 'color', 'size'],
  setup (props) {
    const cssVars = () => {
      return {
        '--button-bg-color': props.color !== '' ? props.color : '#CCC',
        '--button-fg-color': props.color !== '' ? 'white' : 'black'
      }
    }
    return { cssVars }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .my-button {
    padding: 10px 20px;
    border-radius: themed('border-radius');
    border: 0;
    padding: 10px 20px;
    width: 240px;
    background-color: var(--button-bg-color);
    color: var(--button-fg-color);
  }
}
</style>
