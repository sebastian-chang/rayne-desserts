<template>
  <div class="accordion_pane" :class="`rayne-${this.$store.state.theme}`">
    <h3 class="title cursor" :class="activeTab ? 'isActive' : ''" @click="openTab()">
      <button>{{ pane.question }}</button>
    </h3>
    <div class="description" :class="activeTab ? 'expand_on' : ''">
      <p>{{ pane.answer }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  props: ['pane'],
  setup (props) {
    const activeTab = ref(false)

    const openTab = () => {
      activeTab.value = !activeTab.value
    }

    return { activeTab, openTab, props: props.pane }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .acoordoin_pane{
    font-family: themed('serif-font');
  }
  .title {
    font-weight: 400;
    font-size: 1rem;
    line-height: 2;
    letter-spacing: 0.4px;
    box-sizing: border-box;
    padding: 1.5rem 0;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%20focusable='false'%20aria-hidden='true'%20class='ui-icon-controls-close-inverted'%3E%3Cpath%20fill='%2319110b'%20fill-rule='evenodd'%20d='M48%2037V12h8v25h24v8H56v23h-8V45H24v-8h24z'/%3E%3C/svg%3E");
    background-size: 1rem 1rem;
    background-repeat: no-repeat;
    background-position: right center;
    border-bottom: #eae8e4 1px solid;
    border-bottom: 1px solid #eae8e4;
  }
  .isActive {
    font-weight: 700;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%20focusable='false'%20aria-hidden='true'%20class='ui-icon-controls-close-inverted'%3E%3Cpath%20fill='%2319110b'%20fill-rule='evenodd'%20d='M12%2036h56v8H12z'/%3E%3C/svg%3E");
  }
  .description.expand_on {
    max-height: 100%;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    animation: fadeDown;
    animation-duration: 0.3s;
  }
  .description {
    background-color: themed('faq-background-color');
    border-radius: themed('border-radius');
    overflow: hidden;
    max-height: 0;
    padding: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-top: 0px;
    margin-bottom: 0px;
    animation: fadeUp;
    animation-duration: 0.3s;
  }

  button {
    border: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    text-align: inherit;
    text-transform: inherit;
  }
}
// Animation
@keyframes fadeDown {
  0% {
    height: 0;
    padding-bottom: 0;
    padding-top: 0;
  }
  10% {
    padding-top: 0.25rem;
  }
  50% {
    max-height: 10%;
    padding-bottom: 0.25rem;
    padding-top: 1.25rem;
  }
  100% {
    max-height: 100%;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
  }
}
@keyframes fadeUp {
  100% {
    height: 0;
    padding-bottom: 0;
    padding-top: 0;
  }
  90% {
    max-height: 10%;
    padding-top: 0.25rem;
  }
  50% {
    max-height: 10%;
    padding-bottom: 0.25rem;
    padding-top: 1.25rem;
  }
  10% {
    padding-bottom: 1.25rem;
  }
  0% {
    max-height: 100%;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
  }
}
</style>
