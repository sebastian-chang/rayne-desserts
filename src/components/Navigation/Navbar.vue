<template>
  <header>
    <div class="navbar">
      <nav>
        <div>
          <router-link :to="{ name: 'Home' }">
            <img class="logo" src="../../assets/R.jpg" />
            <!-- Rayne Desserts -->
          </router-link>
        </div>
        <div class="links">
          <span @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
            <router-link :to="{ name: 'Menu', params:{cat: 'all'} }">Menu</router-link>
            <ul
              v-if="menuItems.length > 0"
              class="navbar_dropdown"
              :class="showDropdown ? 'display' : 'hidden'"
            >
              <div class="menu_dropdown_container">
                <li v-for="item in menuItems" :key="item.id">
                  <router-link :to="{name: 'Menu', params:{cat: item.category}}">{{ item.category }}</router-link>
                </li>
              </div>
            </ul>
          </span>
          <!-- <router-link :to="{ name: 'Flavors' }">Flavors</router-link> -->
          <router-link :to="{ name: 'Weddings' }">Weddings</router-link>
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
    const router = useRouter()
    // const route = useRoute()
    const routeSelected = ref('')

    onMounted(async () => {
      const res = await fetch(`${process.env.VUE_APP_BASE_API}/menu`)
      const data = await res.json()
      menuItems.value = await data
    })

    const onUserClick = (linkTo, category) => {
      if (linkTo === 'Menu') {
        router.push({ name: linkTo, params: { cat: category } })
      }
      else {
        router.push({ name: linkTo })
      }
    }
    return { menuItems, showDropdown, onUserClick, routeSelected }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  font-family: $SB_Main_Font;
  width: 75vw;
  background: $light_purple;
  padding: 10px;
  margin: 40px auto;
  // margin-bottom: 60px;
  border-radius: 10px;
  top: 0px;
}
nav {
  display: flex;
  align-items: center;
  border: $dark_purple 2px dashed;
  max-width: 1250px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
}
nav .logo {
  display: block;
  max-height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  margin-top: -6px;
  margin-left: 20px;
  z-index: 1;
  top: 30px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  // display: flex;
  position: relative;
  margin: auto;
  padding-left: 0;
}
nav .links a {
  margin-left: 24px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  padding: 22px 20px;
}
.links a:hover,
.links a:active,
.links a.router-link-active {
  color: $dark_purple;
}

.menu_dropdown_container {
  // padding: 10px;
  padding-bottom: 10px;
  // border: $dark_purple 2px dashed;
  // border-top: none;
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
  border-color: transparent transparent $dark_purple transparent;
}
.navbar_dropdown {
  position: absolute;
  left: -5px;
  transform: scaleY(0);
  width: auto;
  transform-origin: top;
  background-color: $light_purple;
  transition: 0.25s;
  padding-left: 0;
  padding-bottom: 20px;
  z-index: 1;
  border-radius: 10px;
  // border: $dark_purple 2px dashed;
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
      color: white;
      &:hover,
      &.router-link-active {
        color: $dark_purple;
      }
    }
  }
}
.navbar_dropdown.display {
  transform: scaleY(1);
  li {
    opacity: 1;
  }
}
</style>
