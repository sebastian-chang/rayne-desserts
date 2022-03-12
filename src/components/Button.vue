<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <button
      class="my-button"
      :class="disabled ? '' : 'cursor'"
      :disabled="disabled"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['label', 'color', 'size', 'disabled'],
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
    border-radius: themed("border-radius");
    border: 0;
    padding: 10px 20px;
    width: 240px;
    background-color: themed("button-background-color");
    color: themed("button-font-color");

    &:hover {
      background-color: themed("button-background-highlight");
    }

    &:disabled {
      background-color: themed("button-background-disabled");
    }
  }
}
</style>
