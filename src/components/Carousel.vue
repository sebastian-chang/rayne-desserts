<template>
  <div :class="`rayne-${this.$store.state.theme}`" v-if="hasLoaded">
    <div class="product_card_carousel">
      <button
        class="mini_slider_button-prev cursor"
        :class="this.$store.state.deviceType === 'desktop' ? '' : 'touchScreen'"
        @click="previous()"
      >
        <FontAwesomeIcon :icon="left" />
      </button>
      <div class="mini_slider_scrollplane" @click="onUserClick()">
        <ul
          class="mini_slider_items"
          :style="{ transform: `translateX(${positionX})` }"
          :class="restart ? 'goback' : ''"
        >
          <li
            class="mini_slider_item"
            v-for="(image, index) in ogImages"
            :key="index"
          >
            <div class="smart_picture">
              <picture>
                <img :src="image" class="smart_picture_object" />
              </picture>
            </div>
          </li>
        </ul>
      </div>
      <button
        class="mini_slider_button-next cursor"
        :class="this.$store.state.deviceType === 'desktop' ? '' : 'touchScreen'"
        @click.prevent="next()"
      >
        <FontAwesomeIcon :icon="right" />
      </button>
      <div class="mini_slider_tracker">
        <div class="mini_slider_knob"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  props: ['images'],
  components: { FontAwesomeIcon },
  setup (props, context) {
    const positionX = ref('-100%')
    const activeIndex = ref(1)
    const ogImages = [...props.images]
    const ogLength = ogImages.length
    const restart = ref(false)
    const hasLoaded = ref(false)
    const first = ogImages[0]
    const last = ogImages[ogLength - 1]
    const store = useStore()

    onMounted(() => {
      ogImages.unshift(last)
      ogImages.push(first)
      hasLoaded.value = true

      console.log('???', store.state)
    })

    const nextImage = () => {
      activeIndex.value++
      positionX.value = (activeIndex.value * - 100).toString() + '%'
      if (activeIndex.value > ogLength) {
        setTimeout(() => {
          restart.value = true
          activeIndex.value = 1;
          positionX.value = (activeIndex.value * - 100).toString() + '%'
        }, 200)
        setTimeout(() => {
          restart.value = false
        }, 220)

      }
    }
    const previousImage = () => {
      activeIndex.value--
      positionX.value = (activeIndex.value * - 100).toString() + '%'
      if (activeIndex.value <= 0) {
        setTimeout(() => {
          restart.value = true
          activeIndex.value = ogImages.length - 2
          positionX.value = (activeIndex.value * - 100).toString() + '%'
        }, 200)
        setTimeout(() => {
          restart.value = false
        }, 220);
      }
    }
    const onUserClick = () => {
      context.emit('clicked')
    }
    return { left: faChevronLeft, right: faChevronRight, next: nextImage, previous: previousImage, positionX, onUserClick, ogImages, restart, hasLoaded }
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
    transition: transform 0.2s ease;
    list-style-type: none;
    padding: 0;
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
    border-radius: themed("border-radius");
    color: themed("secondary-color");
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

  .goback {
    transition: none;
  }
  .touchScreen {
    opacity: 1;
  }
  // @media screen and (min-width: 768px) {
  //   .mini_slider_button-next,
  //   .mini_slider_button-prev {
  //     opacity: 0;
  //   }
  // }
}
</style>
