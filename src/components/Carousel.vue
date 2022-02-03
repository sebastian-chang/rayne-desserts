<template>
  <div class="product_card_carousel">
    <button class="mini_slider_button-prev" @click="previous()">
      <FontAwesomeIcon :icon="left" />
    </button>
    <div class="mini_slider_scrollplane">
      <ul class="mini_slider_items" :style="{'transform': `translateX(${positionX})`}">
        <li class="mini_slider_item" v-for="(image, index) in localImages" :key="index">
          <div class="smart_picture">
            <picture>
              <img :src="image" class="smart_picture_object" />
            </picture>
          </div>
        </li>
      </ul>
    </div>
    <button class="mini_slider_button-next" @click="next()">
      <FontAwesomeIcon :icon="right" />
    </button>
    <div class="mini_slider_tracker">
      <div class="mini_slider_knob"></div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { ref } from '@vue/reactivity'
export default {
  props: ['images'],
  components: { FontAwesomeIcon },
  setup (props) {
    const localImages = ref(props.images)
    const positionX = ref('0%')
    const activeIndex = ref(0)

    const nextImage = () => {
      activeIndex.value++
      if (activeIndex.value >= localImages.value.length) {
        activeIndex.value = 0
      }
      positionX.value = (activeIndex.value * -100).toString() + '%'
    }
    const previousImage = () => {
      activeIndex.value--
      if (activeIndex.value < 0) {
        activeIndex.value = localImages.value.length - 1
      }
      positionX.value = (activeIndex.value * -100).toString() + '%'
    }
    return { left: faChevronLeft, right: faChevronRight, localImages, next: nextImage, previous: previousImage, positionX }
  }

}
</script>

<style lang="scss" scoped>
// carousel
@include rayne($themes) {
  .product_card_carousel {
    overflow: hidden;
    border-radius: themed("border-radius");
  }
  .mini_slider_items {
    white-space: nowrap;
    transition: transform 0.3s ease;
    list-style-type: none;
    padding: 0;
    animation: infinite;
  }
  .mini_slider_item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    min-width: 100%;
    height: 100%;
  }

  .mini_slider_button-next,
  .mini_slider_button-prev {
    top: 50%;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    opacity: 0;
    width: 3rem;
    height: 3rem;
    background: #fff;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
  }
  .mini_slider_button-next {
    right: 0;
  }
  .product_card_carousel:hover .mini_slider_button-next,
  .product_card_carousel:hover .mini_slider_button-prev {
    opacity: 1;
  }
  .smart_picture img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
}
</style>
