<template>
  <Navbar />
  <div class="content">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer.vue'
export default {
  components: { Navbar, Footer },
  setup () {

  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Marck+Script&family=Nunito+Sans:wght@400;600;700&display=swap");

.content {
  min-height: calc(100vh - 140px);
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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
