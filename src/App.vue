<template>
  <!-- <Navbar />
  <MobileNavbar v-if="false"/> -->
  <Navbar v-if="this.$store.state.windowWidth >= 992 && this.$store.state.deviceType === 'desktop'" />
  <MobileNavbar v-else />
  <div class="content">
    <router-view />
  </div>
  <Footer />
  <div class="hidden">
    <p>NEW WIDTH {{ width }}</p>
    <p>NEW type {{ type }}</p>
    <p>NEW DEVICE TYPE {{ deviceType }}</p>
  </div>
</template>

<script>
import Navbar from './components/Navigation/Navbar'
import MobileNavbar from './components/Navigation/MobileNavbar.vue'
import Footer from './components/Navigation/Footer.vue'
import { computed, ref } from '@vue/reactivity'
import { onMounted, onUnmounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  components: {
    Navbar,
    MobileNavbar,
    Footer,
  },
  setup () {
    const store = useStore()
    let windowWidth = ref(window.innerWidth)

    const onWidthChange = () => windowWidth.value = window.innerWidth

    onMounted(() => window.addEventListener('resize', onWidthChange))
    onUnmounted(() => window.removeEventListener('resize', onWidthChange))

    const type = computed(() => {
      console.log('<<<WINDOW TYPE CCOMPUTED')
      if (windowWidth.value < 576) {
        store.dispatch('windowTypeChange', 'xs')
        return 'xs'
      }
      if (windowWidth.value >= 576 && windowWidth.value < 768) {
        store.dispatch('windowTypeChange', 'sm')
        return 'sm'
      }
      if (windowWidth.value >= 768 && windowWidth.value < 992) {
        store.dispatch('windowTypeChange', 'md')
        return 'md'
      }
      if (windowWidth.value >= 992 && windowWidth.value < 1200) {
        store.dispatch('windowTypeChange', 'lg')
        return 'lg'
      }
      if (windowWidth.value >= 1200 && windowWidth.value < 1400) {
        store.dispatch('windowTypeChange', 'xl')
        return 'xl'
      }
      if (windowWidth.value >= 1400) {
        store.dispatch('windowTypeChange', 'xxl')
        return 'xxl'
      }
      return null
    })

    const deviceType = computed(() => {
      console.log('<<<DEVICE TYPE COMPUTED')
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        store.dispatch('deviceTypeChange', 'tablet')
        return 'tablet';
      }
      if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        store.dispatch('deviceTypeChange', 'mobile')
        return 'mobile';
      }
      store.dispatch('deviceTypeChange', 'desktop')
      return 'desktop';
    })

    const width = computed(() => {
      store.dispatch('windowWidthChange', windowWidth.value)
      return windowWidth.value
    })

    return { width, type, deviceType }
  },
}
</script>

<style lang="scss">
/* @import url("https://fonts.googleapis.com/css2?family=Marck+Script&family=Nunito+Sans:wght@400;600;700&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Marck+Script&family=Nunito+Sans:wght@400;600;700&family=Raleway:wght@400;600;700&display=swap");

// .content {
//   min-height: calc(100vh - 200px);
// }
html,
body {
  height: calc(100vh - 200px);
  margin-left: 0px;
  margin-right: 0px;
}
.hidden {
  display: none;
}
.cursor {
  cursor: pointer;
  user-select: none;
}
.container {
  // width: 100%;
  max-width: $SB_Container_XS;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: o;
  margin-right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  @media screen and (min-width: $SB_Breakpoint_SM) {
    width: revert;
    // width: inherit;
    // max-width: $SB_Container_SM;
    max-width: 100%;
    padding-left: $SB_Gutter_Width;
    padding-right: $SB_Gutter_Width;
  }
  @media screen and (min-width: $SB_Breakpoint_MD) {
    width: revert;
    // min-width: $SB_Container_MD;
    max-width: 100%;
    padding-left: $SB_Gutter_Width;
    padding-right: $SB_Gutter_Width;
  }
  @media screen and (min-width: $SB_Breakpoint_LG) {
    width: revert;
    // width: $SB_Container_LG;
    max-width: 100%;
    padding-left: $SB_Gutter_Width;
    padding-right: $SB_Gutter_Width;
  }
  @media screen and (min-width: $SB_Breakpoint_XL) {
    width: revert;
    // max-width: $SB_Container_XL;
    max-width: 100%;
    padding-left: $SB_Gutter_Width;
    padding-right: $SB_Gutter_Width;
  }
  @media screen and (min-width: $SB_Breakpoint_XXL) {
    width: revert;
    // max-width: $SB_Container_XXL;
    max-width: 100%;
    padding-left: $SB_Gutter_Width;
    padding-right: $SB_Gutter_Width;
  }
}
</style>
