<template>
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
      <div class="contact-form">
        <form @submit.prevent="handleSubmit">
          <h4>Contact Form</h4>
          <Input :name="'Name'" :label="'Name'" :required="true" />
          <Input :name="'Email'" :label="'Email'" :required="true" />
          <Input :name="'Phone'" :label="'Phone'" :required="false" />
          <Input :type="'textarea'" :name="'Messages'" :label="'Message'" :required="true" />
          <Button :label="'Send'" :color="'#c8afd3'" :size="md"  />
          <button>Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ContactCard from '../components/ContactCard.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
export default {
  components: { ContactCard, Input, Button },
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

<style>
.contact{
  width: 90vw;
  margin: auto;
}
.contact-header {
  font-family: "Marck Script", cursive;
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
  /* margin: 0 auto; */
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
  /* grid-template-columns: repeat(3, 1fr); */
}
.contact-form{
  width: 60vw;
  margin: 0 auto;
  margin-top: 35px;
  padding: 15px;
}
.contact-form h4 {
  margin-top: 10px;
  margin-bottom: 15px;
}
</style>
