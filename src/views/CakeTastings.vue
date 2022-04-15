<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="tasting container">
      <!-- Cake Design -->
      <div class="cake_design container">
        <div class="cake_description">
          <h1 class="tasting_title first_title">Cake Design</h1>
          <div>
            <p>
              We take great pride in designing your cake for your special day.
              Something something something.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quisquam blanditiis voluptate eius repudiandae autem placeat dicta
              vero fugit obcaecati itaque quis, sed maiores, ex commodi aliquid
              sapiente veritatis quae.
            </p>
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
            <p>
              We offer cake tastings with a variety of different flavors so you
              can find the taste that you would share with those closest to you.
            </p>
            <p>Something something something.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, explicabo laudantium est ab blanditiis sed ipsum
              laborum magnam mollitia soluta, necessitatibus recusandae dolor
              ipsam illum error maiores, quaerat modi? Deleniti!
            </p>
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
            <p>
              Something about cake sizes, serving deminesions of each cake
              slice.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              aliquid voluptas corrupti, animi architecto doloribus fugiat! Eos
              excepturi quis qui itaque illo alias deleniti, a fugit asperiores
              tempore mollitia quasi!
            </p>
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
            <p>
              Delivery prices may vary depending on the distance to the venue.
              We will happily setup the cake for you at the time of delivery.
            </p>
            <p>
              We have cake stands for a rental fee. Something something
              something.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              quae qui provident laudantium eius? Recusandae dolorem totam,
              dicta explicabo esse reiciendis, quae ut voluptatem, quia cum
              facere doloremque quidem consectetur!
            </p>
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
          <Input
            class="tasting_form_input"
            label="Name"
            name="name"
            v-model="tastingMessage.name"
            :type="'text'"
            :required="true"
          />
          <Input
            class="tasting_form_input"
            label="Email"
            name="email"
            v-model="tastingMessage.email"
            :type="'email'"
            :required="true"
          />
          <!-- <div class="test" v-if="this.$store.state.windowType === 'lg'"></div> -->
          <Input
            class="tasting_form_input"
            label="Name of Venue"
            name="venue"
            v-model="tastingMessage.venue"
            :type="'text'"
            :required="true"
          />
          <Input
            class="tasting_form_input"
            label="Number of Guests"
            name="guests"
            v-model="tastingMessage.guests"
            :type="'number'"
            :required="true"
          />
          <!-- <div class="test" v-if="this.$store.state.windowType === 'md'"></div> -->
          <div class="tasting_form_input">
            <Datepicker
              class="tasting_form_date tasting_form_input"
              v-model="tastingMessage.date"
              :clearButton="true"
              inputFormat="MMM dd, yyyy"
              :weekStartsOn="0"
              :style="dateStyles"
              placeholder="Type or select date"
            />
          </div>
          <div class="test" v-if="this.$store.state.windowType === 'lg'"></div>
          <!-- <div :class="this.$store.state.windowType === 'lg' ? '':'tasting_form_checkboxes'"> -->
          <div class="tasting_form_checkboxes">
            <CheckboxGroup
            class="tasting_form_input"
              label="Cake Flavors"
              name="flavors"
              v-model="tastingMessage.flavors"
              :items="cakes"
              :maxPicks="3"
              :required="true"
            />
            <CheckboxGroup
            class="tasting_form_input"
              label="Icings"
              name="icings"
              v-model="tastingMessage.icings"
              :items="icings"
              :maxPicks="2"
              :required="true"
            />
            <CheckboxGroup
            class="tasting_form_input"
              label="Cake Fillings"
              name="fillings"
              v-model="tastingMessage.fillings"
              :items="fillings"
              :maxPicks="2"
              :required="true"
            />
            <CheckboxGroup
            class="tasting_form_input"
              v-model="tastingMessage.misc"
              :items="otherItems"
              label="Misc Items"
              name="misc"
            />
          </div>
          <Switch
            label="Cake Delivery"
            name="delivery"
            v-model="tastingMessage.delivery"
            class="tasting_delivery"
            :required="false"
          />
          <Button
            id="tasting_submit_button"
            :label="'Send'"
            :color="'#c8afd3'"
            :size="'md'"
            :disabled="isButtonDisabled || isSubmitting"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Datepicker from 'vue3-datepicker'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import CheckboxGroup from '../components/CheckboxGroup.vue'
import Switch from '../components/Switch.vue'
import useFormValidation from '../modules/userFormValidation.js'
import useSubmitButtonState from '../modules/useSubmitButtonState.js'
import emailjs from '@emailjs/browser'

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
      'padding': '15px 0',
      'margin-top': '10px',
      'background': 'transparent',
      'border': 'none',
      'color': '#19110b',
      'border-bottom': '1px solid #8a8a8a',
      '--vdp-hover-bg-color': '#8a8a8a',
      '--vdp-selected-bg-color': '#19110b',
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
    const tastingMessage = reactive({
      name: "",
      email: "",
      venue: "",
      guests: "",
      date: new Date(),
      flavors: [],
      icings: [],
      fillings: [],
      misc: [],
      delivery: false,
    })

    const store = useStore()
    const router = useRouter()
    const date = ref(new Date())
    const cakes = ref([])
    const icings = ref([])
    const fillings = ref([])
    const userFlavors = ref([])
    const isSubmitting = ref(false)
    const { errors } = useFormValidation()
    const { isButtonDisabled } = useSubmitButtonState(tastingMessage, errors)


    onMounted(async () => {
      store.dispatch('themeChange', 'weddings')
      const res = await fetch(`${process.env.VUE_APP_BASE_API}/flavors`)
      const data = await res.json()
      cakes.value = data.filter(item => item.type === 'cake')
      icings.value = data.filter(item => item.type === 'icing')
      fillings.value = data.filter(item => item.type === 'filling')
    })


    const onHandleSubmit = async () => {
      isSubmitting.value = true
      const [day, month, date, year] = [
        new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(tastingMessage.date) + ',',
        new Intl.DateTimeFormat('en-US', { month: 'long' }).format(tastingMessage.date),
        tastingMessage.date.getDate() + ',',
        tastingMessage.date.getFullYear()
      ]
      const delivery = tastingMessage.delivery ? 'need' : 'not need'
      const misc = tastingMessage.misc.length === 0 ? 'nothing' : 'a ' + tastingMessage.misc.join(', ')
      const tastingObj = {
        userName: tastingMessage.name,
        email: tastingMessage.email,
        venue: tastingMessage.venue,
        guests: tastingMessage.guests,
        weddingDate: [day, month, date, year].join(' '),
        flavors: tastingMessage.flavors.join(', '),
        icings: tastingMessage.icings.join(', '),
        fillings: tastingMessage.fillings.join(', '),
        misc: misc,
        delivery: delivery,
      }

      try {
        console.log('!!TASTING OBJECT', tastingObj)
        const res = await emailjs.send(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TASTING_TEMPLATE_ID,
          tastingObj,
          process.env.VUE_APP_EMAILJS_USER_ID,
        )
        if (res.status === 200) {
          router.push({ name: 'Home' })
        }
      }
      catch (err) {
        console.log('TASTING ERROR', err)
        isSubmitting.value = false
      }
      console.log("SUBMITTED", tastingObj)
    }

    return {
      onHandleSubmit,
      date,
      dateStyles,
      cakes,
      icings,
      fillings,
      userFlavors,
      otherItems,
      tastingMessage,
      isSubmitting,
      isButtonDisabled
    }
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
    flex-direction: column;
    justify-content: space-around;
    margin-top: 40px;
  }
  .cake_design {
    margin-top: 0;
  }
  .right {
    justify-content: center !important;
    text-align: right;
  }
  .cake_tasting_form_section {
    margin: 0 auto;
    margin-top: 0px;
    padding: 15px;
    p {
      margin-bottom: 40px;
    }
    .tasting_title {
      margin-top: 64px;
    }
  }
  .tasting_form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .tasting_form_input,
  .tasting_form_date,
  .tasting_form_checkboxes {
    grid-column: 1;
  }
  #tasting_submit_button {
    grid-column: 1;
    margin-top: 40px;
    margin-left: 20px;
  }
  .tasting_title {
    font-family: themed("cursive-font");
    margin-top: 48px;
  }
  .first_title {
    margin-top: 0px;
  }
  .cake_description {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
  }
  .cake_image {
    position: relative;
    margin-top: 40px;

    img {
      box-sizing: border-box;
      max-height: 100%;
      max-width: 100%;
      width: auto;
      height: 100%;
    }
  }
  .test {
    width: 100%;
  }

  @media screen and (min-width: $SB_Breakpoint_SM) {
    .tasting_form {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px 0;
    }
    .tasting_form_input,
    .tasting_form_date,
    .tasting_form_checkboxes {
      grid-column: 1/4;
    }
    #tasting_submit_button {
      grid-column: 2/3;
    }
    .tasting_delivery {
      grid-column: 1/4;
      margin-top: 30px;
    }
  }

  @media screen and(min-width: $SB_Breakpoint_MD) {
    .tasting_form_input,
    .tasting_form_date,
    .tasting_form_checkboxes {
      grid-column: inherit;
      margin: 0 auto;
    }
    .tasting_form_checkboxes {
      grid-column: 1/4;
      margin: 0;
    }
  }
  @media screen and(min-width: $SB_Breakpoint_LG) {
    .cake_design,
    .cake_tasting,
    .cake_sizes,
    .cake_delivery {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 60vh;
      margin-top: 40px;
      margin-bottom: 20px;
      padding: 20px 40px;
    }
    .cake_tasting,
    .cake_delivery {
      flex-direction: row-reverse;
    }
    .cake_description {
      margin-top: 0;
      padding: 0 20px;
    }
    .cake_image {
      img {
        max-height: 100%;
        max-width: 400px;
        width: auto;
        height: 100%;
      }
    }
    .cake_tasting_form_section{
      width: 85vw;
    }
    .tasting_form_input,
    .tasting_form_date,
    .tasting_form_checkboxes {
      margin: 0 10px;
    }
    .tasting_form_checkboxes {
      margin: 0;
      margin-top: 20px;
      grid-column: 1/4;
      display: grid;
      grid-template-columns: 1fr 1fr ;
      grid-gap: 30px;
      .tasting_form_input{
        grid-column: unset;
      }
    }
    .tasting_delivery{
      margin-left: 15px;
    }
  }
}
</style>
