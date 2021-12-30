<template>
  <button class="my-button" :style="cssVars">{{ label }}</button>
</template>

<script>
export default {
  props: ['label', 'color', 'size'],
  setup (props) {
    const cssVars = () => {
      return { '--button-bg-color': props.size === 'md' ? '#FC4' : '#CCC' }
    }
    return { cssVars }
  }
}
</script>

<style lang="scss" scoped>
.my-button {
  padding: 10px 20px;
  border-radius: 8px;
  border: 0;
  background-color: var(--button-bg-color);
}
</style>
