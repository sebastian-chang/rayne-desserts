<template>
  <div class="weddings" :class="themeClass">
    WEDDINGS
    <button @click="onUserClick('wedding')">Wedding</button>
    <button @click="onUserClick('dessert')">Desserts</button>
    <hr />
    <h1 class="theme_title">This is a test about themes</h1>
    <button class="theme_btn_default">Default</button>
    <button class="theme_btn_primary">Primary</button>
    <button>Nothing</button>
  </div>
</template>

<script>
export default {
  // watch: {
  //   themeClass () {
  //     sessionStorage.theme = this.$store.state.theme
  //     console.log('WATCHING', this.$store.state.theme)
  //   }
  // },
  created () {
    if (sessionStorage.theme) {
      this.$store.dispatch('themeChange', sessionStorage.theme)
    }
    else {
      console.log('CREATED', this.$store.state.theme)
      sessionStorage.theme = this.$store.state.theme
    }
  },
  computed: {
    themeClass () {
      return `rayne-${this.$store.state.theme}`
    }
  },
  methods: {
    onUserClick (page) {
      if (page === 'wedding') {
        console.log('WEDDING', this.$store.state.theme)
        this.$store.dispatch("themeChange", 'wedding')
        console.log('WEDDING', this.$store.state.theme)
      }
      if (page === 'dessert') {
        console.log('DESSERT', this.$store.state.theme)
        this.$store.dispatch("themeChange", 'dessert')
        console.log('DESSERT', this.$store.state.theme)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@include rayne($themes) {
  .theme_title {
    width: 100%;
    height: 40px;
    text-transform: uppercase;
    background-color: themed("main-color");
    font-family: themed("serif-font");
  }

  // .theme_btn_default {
  //   @include button;
  // }

  .theme_btn_primary {
    background-color: themed("main-background");
    border: themed("btn-primary-border");
    padding: 20px;
  }
}
</style>
