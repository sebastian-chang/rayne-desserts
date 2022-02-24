<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="contact">
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
              :label="'Send'"
              :color="'#c8afd3'"
              :size="'md'"
              :disabled=" isButtonDisabled || isSubmitting"
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
  .contact {
    width: 90vw;
    margin: auto;
  }
  .contact-header {
    font-family: themed("cursive-font");
    font-weight: 400;
    font-size: 24px;
    text-align: center;
  }
  .contact-section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
  .contact-cards {
    width: 70vw;
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
    width: 70%;
    margin: 0 auto;
    margin-top: 35px;
    padding: 15px;
    h4 {
      font-family: themed("cursive-font");
      font-weight: 400;
      font-size: $SB_H4_Font_Size;
      margin-top: 10px;
      margin-bottom: 15px;
    }
  }
  .contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;

    #contact-form-message {
      grid-column: 1/4;
    }

    #contact-submit-button {
      grid-column: 2/3;
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 576px) {
    .contact-form {
      margin-top: 40px;
      gap: 30px 0px;
    }
    .contact-form-section {
      width: 100%;
      text-align: center;
    }
    .contact-cards {
      width: 100%;
    }
    .contact-form-input {
      grid-column: 1/4;
      margin: 0 auto;
    }
    #contact-form-message {
      margin: 0 auto;
      max-width: 210px;
    }
  }
}
</style>
