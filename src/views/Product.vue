<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="product container">
      <div v-if="!isLoading" class="product_main">
        <div class="product_images">
          <ul class="product_image_list">
            <li
              v-for="image in state.product.images"
              :key="image"
              class="product_image_item"
              :class="state.product.images.length % 2 === 0 ? 'even' : 'odd'"
            >
              <img :src="image" class="product_image" />
            </li>
          </ul>
        </div>
        <div class="product_details">
          <div class="product_details_header">
            <div class="product_favorite">
              <button class="product_add_favorite" @click="addFavorite()">
                <FontAwesomeIcon
                  class="product_icon"
                  :icon="favorite ? liked : heart"
                />
              </button>
            </div>
          </div>
          <h1 class="product_details_title">{{ state.product.name }}</h1>
          <div class="product_description">{{ state.product.description }}</div>
          <div class="product_ingredients">
            <h3 class="product_label">Contains</h3>
            <ul class="product_ingredients_list">
              <li v-if="state.product.nuts" class="product_ingredients_item">
                <FontAwesomeIcon class="product_icon" :icon="nuts" />
                <span>Nuts</span>
              </li>
              <li v-if="state.product.dairy" class="product_ingredients_item">
                <FontAwesomeIcon class="product_icon" :icon="dairy" />
                <span>Dairy</span>
              </li>
              <li v-if="state.product.gluten" class="product_ingredients_item">
                <FontAwesomeIcon class="product_icon" :icon="gluten" />
                <span>Wheat</span>
              </li>
              <li v-if="state.product.vegan" class="product_ingredients_item">
                <FontAwesomeIcon class="product_icon" :icon="vegan" />
                <span>Vegan</span>
              </li>
            </ul>
          </div>
          <div class="product_pricing">
            <h3 class="product_label">Pricing</h3>
            <ul class="product_pricing_table">
              <li class="pricing_line_item">
                <span class="pricing_label">Single</span>
                <span class="pricing_price">$1.25</span>
              </li>
              <li class="pricing_line_item">
                <span class="pricing_label">Half Dozen</span>
                <span class="pricing_price">$4.50</span>
              </li>
              <li class="pricing_line_item">
                <span class="pricing_label">Dozen</span>
                <span class="pricing_price">$10.75</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from '@vue/runtime-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart, faBreadSlice, faCheese, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faNutritionix } from '@fortawesome/free-brands-svg-icons'
export default {
  props: ['slug'],
  components: { FontAwesomeIcon },
  setup (props) {
    const state = reactive({
      product: null
    })
    const isLoading = ref(true)

    onMounted(async () => {
      console.log('PRODUCT', props)
      const splitProps = props.slug.split('-')
      const res = await fetch(`${process.env.VUE_APP_BASE_API}/menu?category=${splitProps[0]}`)
      const data = await res.json()
      state.product = data[0].items.filter(item => item.id == splitProps[2])[0]
      isLoading.value = false
    })

    return {
      state,
      isLoading,
      heart: farHeart,
      liked: fasHeart,
      gluten: faBreadSlice,
      dairy: faCheese,
      vegan: faSeedling,
      nuts: faNutritionix
    }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .product_main {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    // grid-auto-flow: row;
    // grid-gap: 2rem;
    background-color: #fff;
    // background: steelblue;
    margin-left: 0;
    margin-right: 0;

    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .product_images {
    grid-column: auto / span 2;
    // background: olive;
    // display: block;
    // width: 66.667%;

    .product_image_list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      // align-items: stretch;
      justify-content: space-between;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .product_image_item {
      box-sizing: border-box;
      position: relative;
      display: block;
      // height: 40vh;
    }
    .odd:first-child,
    .even:first-child,
    .even:last-child {
      grid-column: auto / span 2;
      height: 60vh;
    }
  }
  .product_image_list .product_image_item .product_image {
    object-fit: cover;
    height: 100%;
    // box-sizing: border-box;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    border-radius: themed("border-radius");
    // background: purple;
  }
  .product_image_list .product_image_item:first-child .product_image {
    object-fit: cover;
    height: 100%;
    box-sizing: border-box;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    // background: wheat;
  }
  .product_image_list .product_image_item:last-child .product_image {
    // object-fit: cover;
    height: 100%;
    box-sizing: border-box;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    background: navy;
  }

  .product_details {
    padding: 48px 35px;
    grid-column: auto / span 1;
    // background: palevioletred;
    font-family: $SB_Main_Font;
    // width: 33%;

    .product_favorite {
      justify-content: center;
      align-content: center;
      text-decoration: none;
      box-sizing: border-box;
      width: 2rem;
      height: 2rem;

      .product_add_favorite {
        padding: 0.5rem;
        margin: -0.5rem;
        cursor: pointer;
        background: transparent;
        border: none;

        .product_icon {
          color: themed("heart-color");
          height: 1rem;
          width: 1rem;
        }
      }
    }
    .product_details_header .product_favorite {
      width: auto;
      position: relative;
      // top: 1rem;
      // right: 1rem;
      text-align: right;
    }

    .product_details_title {
      font-family: themed("cursive-font");
      font-size: $SB_H1_Font_Size;
      color: themed("secondary-color");
      letter-spacing: 0;
      line-height: 2.5rem;
      font-weight: 700;
      // text-transform: uppercase;
    }

    .product_description {
      margin-top: 2.5rem;
    }
    .product_label {
      font-family: themed("cursive-font");
      font-size: $SB_H4_Font_Size;
      color: themed("secondary-color");
      line-height: 1.25rem;
      letter-spacing: 0.025rem;
      margin: 3rem 0.5rem 1rem 0.5rem;
    }
    .product_ingredients_list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      // padding-bottom: 48px;
      // margin-left: 0;
      padding-left: 0;
      // background: paleturquoise;

      .product_ingredients_item {
        margin-left: 1rem;
        margin-bottom: 10px;
        list-style: none;
        font-size: themed("serif-font");

        span {
          margin-left: 15px;
        }
      }
    }

    .product_pricing_table {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      list-style: none;

      .pricing_line_item {
        width: 100%;
        min-height: 48px;
        margin-top: 24px;
        margin-left: 24px;
        margin-right: 24px;
        padding-top: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid #333;

        .pricing_label {
          display: block;
          float: left;
          // color: orange;
          margin-left: 20px;
        }
        .pricing_price {
          display: block;
          float: right;
          // color: paleturquoise;
          margin-right: 20px;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .product_main {
      grid-template-columns: repeat(3, 1fr);
    }
    .product_image_item {
      box-sizing: border-box;
      position: relative;
      display: block;
      // height: 40vh;
    }
    .product_ingredients_list{
      justify-content: space-evenly;
    }
  }
  @media screen and (min-width: 1200px) {
    // .product_main {
    //   grid-template-columns: repeat(3, 1fr);
    // }
    .product_image_item {
      height: 40vh;
    }
    // .product_ingredients_list{
    //   justify-content: space-evenly;
    // }
  }
}
</style>
