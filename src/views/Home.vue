<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="home container">
      <Carousel :images="images" />
      <div class="home_info">
        <h1>Desserts that you'll love</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Carousel from '../components/Carousel'

export default {
  name: "Home",
  components: {
    Carousel
  },
  setup () {
    const images = ref(['https://picsum.photos/2160?random=1', 'https://picsum.photos/2160?random=6', 'https://picsum.photos/2160?random=13'])

    return { images }
  }
};
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .home {
    position: relative;
    // max-width: 100%;
    padding: 0px;
    margin-top: -50px;

    .home_info {
      position: absolute;
      top: 50%;
      left: 50%;
      color: purple;
    }
  }
}
</style>
