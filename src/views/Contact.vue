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
          <form @submit.prevent="handleSubmit" class="contact-form">
            <Input class="contact-form-input" :name="'Name'" :type="'text'" :required="true" />
            <Input class="contact-form-input" :type="'phone'" :required="false" />
            <Input class="contact-form-input" :type="'email'" :required="true" />
            <Input id="contact-form-message" :type="'textarea'" />

            <Button id="contact-submit-button" :label="'Send'" :color="'#c8afd3'" :size="'md'" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ContactCard from '../components/ContactCard.vue'
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'

export default {
  components: {
    ContactCard,
    Input,
    Button,
  },
  setup () {
    const name = ref('')
    const email = ref('')
    const phone = ref('')
    const message = ref('')
    const handleSubmit = () => {
      console.log('SUBMIT')
    }
    return { handleSubmit, name, email, phone, message }
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
    font-family: themed('cursive-font');
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
      font-family: themed('cursive-font');
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
      padding: 10px 20px;
      width: 240px;
      grid-column: 2/3;
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
