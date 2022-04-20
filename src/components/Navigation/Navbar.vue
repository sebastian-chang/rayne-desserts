<template>
  <header :class="`rayne-${this.$store.state.theme}`" v-if="hasLoaded">
    <div class="navbar container">
      <nav>
        <div class="logo_link">
          <router-link :to="{ name: 'Home' }">
            <img class="logo" src="../../assets/R.jpg" />
            <!-- Rayne Desserts -->
          </router-link>
        </div>
        <div class="links">
          <span
            @mouseover="showDropdown = true"
            @mouseleave="showDropdown = false"
          >
            <router-link
              :to="{ name: 'Menu', params: { cat: menuItems[0].category } }"
            >
              <!-- <router-link :to="{ name: 'Menu', params: { cat: 'all' } }"> -->
              Menu
            </router-link>
            <ul
              v-if="menuItems.length > 0"
              class="navbar_dropdown"
              :class="showDropdown ? 'display' : 'hidden'"
            >
              <div class="menu_dropdown_container">
                <li v-for="item in menuItems" :key="item.id">
                  <router-link
                  :class="this.$store.state.theme === 'weddings' ? 'nav-link-grow-up' : '' "
                    :to="{ name: 'Menu', params: { cat: item.category } }"
                  >
                    {{ item.category }}
                  </router-link>
                </li>
              </div>
            </ul>
          </span>
          <!-- <router-link :to="{ name: 'Flavors' }">Flavors</router-link> -->
          <router-link
            v-if="`${this.$store.state.theme}` === 'desserts'"
            :to="{ name: 'Weddings' }"
          >
            Weddings
          </router-link>
          <router-link
            v-if="`${this.$store.state.theme}` === 'weddings'"
            :to="{ name: 'Cake Tastings' }"
          >
            Cake Tastings
          </router-link>
          <router-link
            v-if="`${this.$store.state.theme}` === 'weddings'"
            :to="{ name: 'Desserts' }"
          >
            Desserts
          </router-link>
          <!-- <router-link :to="{ name: 'Gallery' }">Gallery</router-link> -->
          <router-link :to="{ name: 'Reviews' }">Reviews</router-link>
          <router-link :to="{ name: 'Contact' }">Contact</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const menuItems = ref([])
    const showDropdown = ref(false)
    const hasLoaded = ref(false)
    const router = useRouter()
    // const route = useRoute()
    const routeSelected = ref('')

    onMounted(async () => {
      const res = await fetch(`${process.env.VUE_APP_BASE_API}/menu`)
      const data = await res.json()
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
    return { menuItems, showDropdown, onUserClick, routeSelected, hasLoaded }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .navbar {
    font-family: themed("serif-font");
    // width: 75vw;
    background: themed("navbar-background-color");
    padding: 10px;
    margin: 40px auto;
    margin-bottom: 60px;
    border-radius: themed("border-radius");
    outline: themed("navbar-nav-border");
    outline-offset: -10px;
    // top: 0px;
    display: flex;
    justify-content: center;
    z-index: 1;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border: themed("navbar-nav-border");
    border-radius: themed("border-radius");
    margin: 0 auto;
    padding: 10px;
    height: 20px;
    max-height: 25px;
    // width: 700px;
    // padding-top: 10px;
    // padding-bottom: 10px;
  }
  .logo_link{
    z-index: 30;
    margin-left: -80px;
    margin-right: 80px;
  }
  .logo {
    display: block;
    max-height: 100px;
    border-radius: 50%;
    overflow: hidden;
    // margin-right: 50px;
    // position: absolute;
    // max-height: 80px;
    // margin-top: -6px;
    // margin-left: 20px;
    // top: -30px;
    // top: 25px;
    // left: 200px;
    // right: 300px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    // display: flex;
    position: relative;
    // margin: auto;
    padding-left: 0;
  }
  nav .links a {
    margin-left: 24px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    color: themed("navbar-nav-link-color");
    padding: 22px 20px;
  }
  .links a:hover,
  .links a:active,
  .links a.router-link-active {
    color: themed("navbar-nav-link-highlight");
  }

  .menu_dropdown_container {
    margin: 10px;
  }
  .links .navbar_dropdown::before {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    top: -10px;
    left: 50%;
    margin-left: -10px;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent themed("navbar-nav-link-highlight")
      transparent;
  }
  .navbar_dropdown {
    position: absolute;
    left: -5px;
    transform: scaleY(0);
    width: auto;
    transform-origin: top;
    background-color: themed("navbar-background-color");
    transition: 0.25s;
    padding-left: 0;
    padding-bottom: 20px;
    z-index: 1;
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    li {
      list-style: none;
      a {
        display: block;
        margin-left: 20px;
        margin-right: 20px;
        padding: 20px 0 0 0;
        transition: 0.45s;
        opacity: 1;
        color: themed("nav-color");
        &:hover,
        &.router-link-active {
          color: themed("nav-color-highlight");
        }
      }
    }
  }

  .nav-link-grow-up::before {
    height: 0%;
    width: 100%;
    bottom: 0px;
  }

  .nav-link-grow-up:hover::before {
    height: 5px;
  }
  .navbar_dropdown.display {
    transform: scaleY(1);
    li {
      opacity: 1;
    }
  }
}
</style>
