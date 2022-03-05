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

<style lang="scss">
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
.cursor {
  cursor: pointer;
  user-select: none;
}
.container {
  width: 100%;
  max-width: $SB_Container_XS;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  @media screen and (min-width: 576px) {
    width: inherit;
    max-width: $SB_Container_SM;
    padding-left: $SB_Gutter_Width;
    padding-right: $SB_Gutter_Width;
  }
  @media screen and (min-width: 768px) {
    width: inherit;
    max-width: $SB_Container_MD;
    padding-left: $SB_Gutter_Width;
    padding-right: $SB_Gutter_Width;
  }
  @media screen and (min-width: 992px) {
    width: inherit;
    max-width: $SB_Container_LG;
    padding-left: $SB_Gutter_Width;
    padding-right: $SB_Gutter_Width;
  }
  @media screen and (min-width: 1200px) {
    width: inherit;
    max-width: $SB_Container_XL;
    padding-left: $SB_Gutter_Width;
    padding-right: $SB_Gutter_Width;
  }
  @media screen and (min-width: 1400px) {
    width: inherit;
    max-width: $SB_Container_XXL;
    padding-left: $SB_Gutter_Width;
    padding-right: $SB_Gutter_Width;
  }
}
</style>
