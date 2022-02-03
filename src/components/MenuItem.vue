<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="product_card">
      <div class="product_card_info_wrapper">
        <div class="product_card_info cursor" @click="onUserClick()">
          <h6 class="product_card_name">{{ item.name }}</h6>
          <span class="product_card_body">{{ item.description }}</span>
        </div>
        <div class="product_card_media cursor" @click="onUserClick()">
          <Carousel :images="item.images" />
        </div>
      </div>
      <div class="product_favorite">
        <button class="product_add_favorite" @click="addFavorite()">
          <FontAwesomeIcon class="product_icon" :icon="favorite ? liked : heart" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
  props: ['item', 'cat'],
  components: { Carousel, FontAwesomeIcon },
  setup (props) {
    const favorite = ref(false)
    const router = useRouter()

    const addFavorite = () => {
      favorite.value = !favorite.value
    }
    const onUserClick = () => {
      console.log('PROPS', typeof (props.item.id), typeof (props.cat))
      router.push({ name: 'Product', params: { slug: `${props.cat}-${props.item.name}-${props.item.id}` } })
    }
    return { heart: farHeart, liked: fasHeart, favorite, addFavorite, onUserClick }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .product_card {
    font-family: themed('serif-font');
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: stretch;
    box-sizing: border-box;
    text-align: left;
    box-shadow: 0 4px 8px 0 themed('box-shadow');
    border-radius: themed('border-radius');

    // flex-direction: row;
    // flex-wrap: wrap;
    &:hover {
      box-shadow: 0 8px 16px 0 themed('box-shadow-hover');
    }
  }
  .product_card_info_wrapper {
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    flex-direction: column-reverse;
  }
  .product_card_info {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    margin-top: 24px;
    margin-bottom: 16px;
    margin-left: 10px;
  }
  .list_label {
    font-size: 0.875rem;
    letter-spacing: 0.025rem;
    line-height: 1.25rem;
    font-weight: 400;
    margin-bottom: 4px;
  }
  .product_card_name {
    max-width: 100%;
    font-size: $SB_H6_Font_Size;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 16px;
  }
  .product_card_body {
    font-size: $SB_Small_Font_Size;
    letter-spacing: 0.025rem;
    line-height: 1.5rem;
    font-weight: 300;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 10px;
  }
  .product_add_favorite {
    padding: 0.5rem;
    margin: -0.5rem;
    cursor: pointer;
    background: transparent;
    border: none;
  }

  .product_card .product_favorite {
    // .product_card .product_favorite_like {
    width: auto;
    position: absolute;
    top: 1rem;
    right: 1rem;
    text-align: left;
  }
  .product_favorite {
    justify-content: center;
    align-content: center;
    text-decoration: none;
    box-sizing: border-box;
    width: 2rem;
    height: 2rem;
  }
  .product_icon {
    color: themed("heart-color");
    height: 1rem;
    width: 1rem;
  }

  // MEDIA
  .product_card_media {
    display: block;
    position: relative;
    overflow: hidden;
    overflow: inherit;
  }
  .product_card_media:before {
    display: block;
    // content: "";
    width: 100%;
    padding-top: 100%;
  }
}
</style>
