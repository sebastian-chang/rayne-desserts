<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="tasting container">
      <!-- Cake Design -->
      <div class="cake_design container">
        <div class="cake_description">
          <h1 class="tasting_title">Cake Design</h1>
          <div>
            <p>We take great pride in designing your cake for your special day. Something something something.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam blanditiis voluptate eius repudiandae autem placeat dicta vero fugit obcaecati itaque quis, sed maiores, ex commodi aliquid sapiente veritatis quae.</p>
          </div>
        </div>
        <div class="cake_image">
          <picture>
            <img
              src="https://cdn0.hitched.co.uk/article/6156/original/1280/jpg/96516-zodiac-cake.jpeg"
            />
          </picture>
        </div>
      </div>
      <!-- Cake Tasting -->
      <div class="cake_tasting container">
        <div class="cake_description right">
          <h1 class="tasting_title">Cake Tastings</h1>
          <div>
            <p>We offer cake tastings with a variety of different flavors so you can find the taste that you would share with those closest to you.</p>
            <p>Something something something.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, explicabo laudantium est ab blanditiis sed ipsum laborum magnam mollitia soluta, necessitatibus recusandae dolor ipsam illum error maiores, quaerat modi? Deleniti!</p>
          </div>
        </div>
        <div class="cake_image">
          <picture>
            <img
              src="https://www.cavinelizabeth.com/wp-content/uploads/2017/01/Wedding-Cake-Tasting-Advice-with-Fashion-Blogger-Cubicle-Chic-4-1.jpg"
            />
          </picture>
        </div>
      </div>
      <!-- Cake Sizes -->
      <div class="cake_sizes container">
        <div class="cake_description right">
          <h1 class="tasting_title">Cake Sizes</h1>
          <div>
            <p>Something about cake sizes, serving deminesions of each cake slice.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aliquid voluptas corrupti, animi architecto doloribus fugiat! Eos excepturi quis qui itaque illo alias deleniti, a fugit asperiores tempore mollitia quasi!</p>
          </div>
        </div>
        <div class="cake_image">
          <picture>
            <img
              src="https://cdn.shopify.com/s/files/1/1832/6341/products/CAKE_STND_A1__02_28daece0-6465-4aeb-8532-64b63bab5c82_1000x.jpg?v=1571324016"
            />
          </picture>
        </div>
      </div>
      <!-- Cake Delivery -->
      <div class="cake_delivery container">
        <div class="cake_description">
          <h1 class="tasting_title">Cake Delivery</h1>
          <div>
            <p>Delivery prices may vary depending on the distance to the venue. We will happily setup the cake for you at the time of delivery.</p>
            <p>We have cake stands for a rental fee. Something something something.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quae qui provident laudantium eius? Recusandae dolorem totam, dicta explicabo esse reiciendis, quae ut voluptatem, quia cum facere doloremque quidem consectetur!</p>
          </div>
        </div>
        <div class="cake_image">
          <picture>
            <img
              src="https://school.malarkeycakes.co.uk/wp-content/uploads/2020/03/UNADJUSTEDNONRAW_thumb_1098.jpg"
            />
          </picture>
        </div>
      </div>
      <!-- Cake Tasting Form -->
      <div class="cake_tasting_form_section container">
        <h1 class="tasting_title">Request a cake tasting</h1>
        <p>Please fill out the following form to schedule a cake tasting</p>
        <form class="tasting_form" @submit.prevent="onHandleSubmit">
          <Input class="tasting_form_input" :name="'Your Name'" :type="'text'" :required="true" />
          <Input class="contact-form-input" :type="'email'" :required="true" />
          <Input
            class="tasting_form_input"
            :name="'Name of Venue'"
            :type="'text'"
            :required="true"
          />
          <Input
            class="tasting_form_input"
            :name="'Number of Guests'"
            :type="'number'"
            :required="true"
          />
          <Datepicker
            class="tasting_form_date tasting_form_input"
            v-model="date"
            :clearButton="true"
            inputFormat="MMM dd, yyyy"
            :style="dateStyles"
            placeholder="Type or select date"
          />
          <div></div>
          <CheckboxGroup :items="cakes" :maxPicks="3" name="Cake Flavors" />
          <CheckboxGroup :items="icings" :maxPicks="2" name="Icings" />
          <CheckboxGroup :items="fillings" :maxPicks="2" name="Cake Fillings" />
          <CheckboxGroup :items="otherItems" name="Misc" />
          <Switch class="tasting_delivery tasting_form_input" name="Cake Delivery" />
          <div></div>
          <div></div>
          <Button id="tasting_submit_button" :label="'Send'" :color="'#c8afd3'" :size="'md'" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Datepicker from 'vue3-datepicker'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import CheckboxGroup from '../components/CheckboxGroup.vue'
import Switch from '../components/Switch.vue'
import { onMounted } from '@vue/runtime-core'
export default {
  components: {
    Input,
    Button,
    Datepicker,
    CheckboxGroup,
    Switch,
  },
  setup () {
    const dateStyles = {
      'display': 'block',
      'font-family': 'inherit',
      'width': '100%',
      'outline': '0',
      'font-size': '1.3rem',
      'color': '#a575ba',
      'padding': '15px 0',
      'margin-top': '10px',
      'background': 'transparent',
      'border': 'none',
      'border-bottom': '1px solid #c8afd3',
      '--vdp-hover-bg-color': '#c8afd3',
      '--vdp-selected-bg-color': '#a575ba',
    }
    const otherItems = [
      {
        "id": 1,
        "name": "Cake Stand",
      },
      {
        "id": 2,
        "name": "Cake Topper",
      }]
    const date = ref(new Date())
    const cakes = ref([])
    const icings = ref([])
    const fillings = ref([])
    const userFlavors = ref([])

    onMounted(async () => {
      const res = await fetch(`${process.env.VUE_APP_BASE_API}/flavors`)
      const data = await res.json()
      cakes.value = data.filter(item => item.type === 'cake')
      icings.value = data.filter(item => item.type === 'icing')
      fillings.value = data.filter(item => item.type === 'filling')
      // flavors.value = await data
      // const temp = await data
      // flavors.value = temp.filter(item => item.type === 'cake')
    })


    const onHandleSubmit = () => {
      console.log("SUBMITTED")
    }

    return { onHandleSubmit, date, dateStyles, cakes, icings, fillings, userFlavors, otherItems }
  },
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .cake_design,
  .cake_tasting,
  .cake_sizes,
  .cake_delivery {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    // align-items: center;
    height: 60vh;
    margin-top: 40px;
    margin-bottom: 20px;
    padding: 20px 40px;
  }
  .cake_tasting,
  .cake_delivery {
    flex-direction: row-reverse;
  }
  .right {
    justify-content: center !important;
    text-align: right;
  }
  .cake_tasting_form_section {
    // width: 70%;
    margin: 0 auto;
    margin-top: 0px;
    padding: 15px;
    p {
      margin-bottom: 40px;
    }
  }
  .tasting_form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
  .tasting_submit_button {
    grid-column: 2/3;
    margin-top: 40px;
    padding-top: 40px;
  }
  .tasting_title {
    font-family: themed("cursive-font");
    // color: themed("main-color");
  }
  .tasting_delivery {
    padding-top: 60px;
  }
  .cake_description {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 30vw;
    padding: 0 40px;
    margin-left: 40px;
    margin-right: 40px;
  }
  .cake_image {
    position: relative;

    img {
      box-sizing: border-box;
      max-height: 100%;
      max-width: 100%;
      width: auto;
      height: 100%;
    }
  }
}
</style>
