<template>
  <div class="home">
    <Carousel :images="images" />
    <div class="home_info">
      <h1>Desserts that you'll love</h1>
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
.home {
  position: relative;
  max-width: 100%;
  margin-top: -50px;

  .home_info {
    position: absolute;
    top: 50%;
    left: 50%;
    color: purple;
  }
}
</style>
