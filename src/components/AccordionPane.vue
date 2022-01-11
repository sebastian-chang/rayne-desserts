<template>
  <h3 class="title" :class="activeTab ? 'isActive' : ''">
    <button @click="openTab()">
      {{ pane.question }}
    </button>
  </h3>
  <transition
    name="fade"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <!-- <div
    class="description"
    :class="activeTab ? 'expand_on exp_content': 'expand_off'"
  > -->
    <div class="description exp_content" v-if="activeTab">
      <p>{{ pane.answer }}</p>
    </div>
  </transition>
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

    // Resize functions
    const enter = elem => {
      const width = getComputedStyle(elem).width

      elem.style.width = width
      elem.style.positon = 'absolute'
      elem.style.visibilty = 'hidden'
      elem.style.height = 'auto'

      const height = getComputedStyle(elem).height

      elem.style.width = null
      elem.style.positon = null
      elem.style.visibilty = null
      elem.style.height = 0

      getComputedStyle(elem).height
      requestAnimationFrame(() => {
        elem.style.height = height;
      })
    }
    const afterEnter = elem => {
      elem.style.height = 'auto'
    }
    const leave = elem => {
      const height = getComputedStyle(elem).height
      elem.style.height = height

      getComputedStyle(elem).height;
      requestAnimationFrame(() => {
        elem.style.height = 0;
      })
    }

    return { activeTab, openTab, props: props.pane, enter, afterEnter, leave }
  }
}
</script>

<style lang="scss" scoped>
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
.expand_off {
  display: none !important;
}
.expand_on {
  display: block;
}
.description {
  overflow: hidden;
  height: fit-content;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.exp_content {
  display: block;
  padding: 1.5rem;
  background-color: #f6f5f3;
}

button {
  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  text-align: inherit;
  text-transform: inherit;
}

.fade-enter-active,
.fade-leave-active {
  transition: height 1s ease;
  transition-property: padding-top, padding-bottom, height, opacity;
  overflow: hidden;
}
.fade-enter, .fade-leave-to{
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
}
</style>
