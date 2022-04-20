<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="mobile_navbar_content">
      <ul>
        <li
          class="dropdown_title"
          :class="activeTab ? '' : ''"
          @click="openTab()"
        >
          Menu
          <ul class="dropdown_items" :class="activeTab ? 'expand_on' : ''">
            <li
              v-for="item in menuItems"
              :key="item.id"
              @click="onUserClick('Menu', item.category)"
            >
              {{ item.category }}
            </li>
          </ul>
        </li>
        <li
          @click="onUserClick('Weddings')"
          v-if="`${this.$store.state.theme}` === 'desserts'"
        >
          Weddings
        </li>
        <li
          @click="onUserClick('Cake Tastings')"
          v-if="`${this.$store.state.theme}` === 'weddings'"
        >
          Cake Tastings
        </li>
        <li
          @click="onUserClick('Desserts')"
          v-if="`${this.$store.state.theme}` === 'weddings'"
        >
          Desserts
        </li>
        <li @click="onUserClick('Reviews')">Reviews</li>
        <li @click="onUserClick('Contact')">Contact</li>
      </ul>
    </div>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'
import { onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  setup () {
    const store = useStore()
    const router = useRouter()
    const menuItems = ref([])
    const showDropdown = ref(false)
    const hasLoaded = ref(false)
    const routeSelected = ref('')
    const activeTab = ref(false)

    onMounted(async () => {
      const res = await fetch(`${process.env.VUE_APP_BASE_API}/menu`)
      const data = await res.json()
      menuItems.value = await data
      hasLoaded.value = await true
    })

    const openTab = () => {
      activeTab.value = !activeTab.value
    }

    const onUserClick = (linkTo, cat) => {
      if (cat) {
        router.push({ name: linkTo, params: { cat: cat } })
      }
      else
        router.push({ name: linkTo })
      store.dispatch('showMobileNavChange', false)
    }
    return {
      menuItems,
      showDropdown,
      onUserClick,
      openTab,
      routeSelected,
      hasLoaded,
      activeTab,
    }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .mobile_navbar_content {
    position: fixed;
    display: flex;
    background: themed("navbar-background-color");
    outline: themed("navbar-nav-border");
    outline-offset: -10px;
    width: 100%;
    max-width: 100%;
    height: 100%;
    height: calc(100vh - 115px);
    padding-top: 40px;
    margin-top: -50px;
    z-index: 99;
    text-transform: uppercase;
    align-content: center;
    justify-content: center;
    ul {
      list-style: none;
      width: 200px;
      padding-left: 40px;
    }
    li {
      color: themed("navbar-nav-link-color");
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 50px;
      margin-bottom: 20px;
      cursor: pointer;
      &:hover {
        color: themed("navbar-nav-link-highlight");
      }
    }
  }
  .dropdown_titles {
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
  .dropdown_items.expand_on {
    max-height: 100%;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    animation: fadeDown;
    animation-duration: 0.3s;
  }
  .dropdown_items {
    background-color: themed("faq-background-color");
    border-radius: themed("border-radius");
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
}
</style>
