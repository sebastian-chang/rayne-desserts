<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="contact container">
      <h1 class="contact-header">CONTACT US</h1>
      <div class="contact-section">
        <div class="contact-cards">
          <ul class="layout-cards-block">
            <li>
              <ContactCard cardStyle="phone" />
            </li>
            <li>
              <ContactCard cardStyle="email" />
            </li>
            <li>
              <ContactCard cardStyle="address" />
            </li>
          </ul>
        </div>
        <div class="contact-form-section">
          <h4>Contact Form</h4>
          <form @submit.prevent="handleSubmit()" class="contact-form">
            <Input
              class="contact-form-input"
              label="Name"
              name="name"
              :type="'text'"
              :required="true"
              v-model="contactMessage.name"
            />
            <Input
              class="contact-form-input"
              label="Phone"
              name="phone"
              :type="'phone'"
              :required="false"
              v-model="contactMessage.phone"
            />
            <Input
              class="contact-form-input"
              label="Email"
              name="email"
              :type="'email'"
              :required="true"
              v-model="contactMessage.email"
            />
            <Input
              id="contact-form-message"
              label="Message"
              name="message"
              :type="'textarea'"
              :required="true"
              v-model="contactMessage.message"
            />

            <Button
              id="contact-submit-button"
              label="Send"
              size="md"
              :disabled="isButtonDisabled || isSubmitting"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, } from 'vue'
import { useRouter } from 'vue-router'
import ContactCard from '../components/ContactCard.vue'
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import emailjs from '@emailjs/browser'

import useFormValidation from '../modules/userFormValidation.js'
import useSubmitButtonState from '../modules/useSubmitButtonState.js'

export default {
  components: {
    ContactCard,
    Input,
    Button,
  },
  setup () {
    const contactMessage = reactive({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
    const router = useRouter()

    const { errors } = useFormValidation();
    const { isButtonDisabled } = useSubmitButtonState(contactMessage, errors);
    const isSubmitting = ref(false)

    const handleSubmit = async () => {
      isSubmitting.value = true
      const emailObj = {
        userName: contactMessage.name,
        email: contactMessage.email,
        phone: contactMessage.phone,
        message: contactMessage.message,
      }
      try {
        console.log('!!EMAIL OBJECT', emailObj)
        const res = await emailjs.send(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_CONTACT_TEMPLATE_ID,
          emailObj,
          process.env.VUE_APP_EMAILJS_USER_ID,
        )
        if (res.status === 200) {
          router.push({ name: 'Home' })
        }
      }
      catch (err) {
        console.log('ERROR', err)
        isSubmitting.value = false
      }
    }
    return { handleSubmit, contactMessage, isButtonDisabled, isSubmitting }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .contact-header {
    font-family: themed("cursive-font");
    font-weight: 400;
    font-size: themed("contact-header-size");
    text-align: center;
  }
  .contact-section {
    // width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
  .contact-cards {
    width: 100%;
  }
  .contact-cards > * {
    grid: 0em;
    flex: 1 1 100%;
  }
  .layout-cards-block {
    display: grid;
    grid-gap: 30px;
    grid-auto-flow: row dense;
    width: 100%;
    list-style: none;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    padding-left: 0px;
  }
  .contact-form-section {
    width: 100%;
    margin: 0 auto;
    margin-top: 35px;
    padding: 15px;
    text-align: center;
    h4 {
      font-family: themed("cursive-font");
      font-weight: 400;
      font-size: themed("contact-form-header-size");
      margin-top: 10px;
      margin-bottom: 36px;
    }
  }
  .contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px 0px;
    margin-top: 40px;

    .contact-form-input {
      grid-column: 1/4;
      // margin: 0 auto;
    }

    #contact-form-message {
      grid-column: 1/4;
      // margin: 0 auto;
      // max-width: 210px;
    }

    #contact-submit-button {
      grid-column: 2/3;
      margin-top: 30px;
    }
  }
  @media screen and (min-width: $SB_Breakpoint_SM) {
    .contact-form-input {
      margin: 0 80px;
    }
    #contact-form-message {
      margin: 0 80px;
    }
  }
  @media screen and (min-width: $SB_Breakpoint_MD) {
    .layout-cards-block {
      grid-gap: 0;
    }
  }
  @media screen and (min-width: $SB_Breakpoint_LG) {
    .layout-cards-block {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      grid-gap: 30px;
    }
    .contact-form-section {
      width: 70%;
      margin: 0 auto;
      margin-top: 35px;
      padding: 15px;
    }
    .contact-form {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px;

      .contact-form-input {
        grid-column: inherit;
        margin: 0 auto;
      }
      #contact-form-message {
        grid-column: 1/4;
        margin: 0;
      }

      #contact-submit-button {
        grid-column: 2/3;
        margin-top: 30px;
      }
    }
  }
  @media screen and (min-width: $SB_Breakpoint_XL) {
    .layout-cards-block {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      grid-gap: 30px;
    }
    .contact-form-input{
      width: 100%;
    }
  }
}
</style>
