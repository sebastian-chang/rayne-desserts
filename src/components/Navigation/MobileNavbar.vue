<template>
  <header :class="`rayne-${this.$store.state.theme}`" v-if="hasLoaded">
    <div
      class="navbar-collapse container"
      :class="this.$store.state.showMobileNav ? 'less_padding' : 'bottom_padding'"
    >
      <nav>
        <div class="logo_link">
          <router-link :to="{ name: 'Home' }">
            <img src="../../assets/R.jpg" class="logo" />
          </router-link>
        </div>
        <div
          id="hamburger-icon"
          class="collapse"
          @click="this.$store.state.showMobileNav = !this.$store.state.showMobileNav"
        >
          <FontAwesomeIcon id="bars" :icon="bars" />
          <!-- <FontAwesomeIcon :icon="close" /> -->
        </div>
      </nav>
    </div>
  </header>
  <div class="navbar-content" v-if="this.$store.state.showMobileNav">
    <MobileNavbarContent />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, ref } from '@vue/runtime-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose, } from '@fortawesome/free-regular-svg-icons'
import MobileNavbarContent from './MobileNavbarContent.vue'
import { projectFirestore } from '../../firebase/config'
export default {
  components: { FontAwesomeIcon, MobileNavbarContent },
  setup () {
    const menuItems = ref([])
    const showDropdown = ref(false)
    const hasLoaded = ref(false)
    const router = useRouter
    const routeSelected = ref('')

    onMounted(async () => {
      const res = await projectFirestore.collection('menu').get()
      const data = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id}
      })
      menuItems.value = await data
      hasLoaded.value = await true
    })

    const onUserClick = (linkTo, category) => {
      if (linkTo === 'Menu') {
        router.push({ name: linkTo, params: { cat: category } })
      }
      else {
        router.push({ name: linkTo })
      }
    }
    return {
      menuItems,
      showDropdown,
      onUserClick,
      routeSelected,
      hasLoaded,
      bars: faBars,
      close: faWindowClose,
    }
  }
}
</script>

<style lang='scss' scoped>
@include rayne($themes) {
  .navbar-collapse {
    position: relative;
    font-family: themed("serif-font");
    background: themed("navbar-background-color");
    // border-radius: themed("border-radius");
    outline: themed("navbar-nav-border");
    outline-offset: -10px;
    // width: 75vw;
    // height: 65px;
    // max-height: 65px;
    top: -8px;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    max-height: 85px;
    // border: themed("navbar-nav-border");
    // border-radius: themed("border-radius");
    // margin-top: 10px;
    // margin-left: -15px;
    // margin-right: -15px;
    // margin-bottom: 10px;
    // padding-left: 10px;
  }
  .logo_link{
    .logo {
      display: block;
      max-height: 50px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  #hamburger-icon {
    padding: 15px 10px 20px;
    margin-right: 10px;
    margin-left: 240px;
    cursor: pointer;

    #bars {
      font-size: 2rem;
      color: themed("navbar-nav-link-color");
    }
  }
  .bottom_padding {
    margin-bottom: 80px;
  }
  .less_padding{
    margin-bottom: 40px;
  }

  @media screen and (min-width: $SB_Breakpoint_SM) {
    #hamburger-icon{

    }
  }
}
</style>
