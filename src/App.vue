<template>
  <Navbar />
  <div class="content">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Navbar from './components/Navigation/Navbar'
import Footer from './components/Navigation/Footer.vue'
export default {
  components: { Navbar, Footer },
  setup () {

  },
}
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Marck+Script&family=Nunito+Sans:wght@400;600;700&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Marck+Script&family=Nunito+Sans:wght@400;600;700&family=Raleway:wght@400;600;700&display=swap");

.content {
  min-height: calc(100vh - 200px);
}
html,
body {
  overflow: none;
  margin-left: 0px;
}
#app {
  height: 100vh;
  width: 100vw;
}
.cursor {
  cursor: pointer;
  user-select: none;
}
.container {
  /* display: block; */
  /* max-width: 100%; */
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  /* width: 100%; */
}
</style>
