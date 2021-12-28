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
      <form @submit.prevent="handleSubmit">
        <h4>Contact Form</h4>
        <input type="text" placeholder="Name" v-model="name" required />
        <input type="text" placeholder="Email" v-model="email" required />
        <input type="text" placeholder="Phone Number" v-model="phone" />
        <textarea placeholder="Message" v-model="message" required />
        <button>Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ContactCard from '../components/ContactCard.vue'
export default {
  components: { ContactCard },
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
.contact-header {
  font-family: "Marck Script", cursive;
  font-weight: 400;
  font-size: 24px;
}
.contact-section {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.contact-cards {
  width: 70vw;
  margin: 0 auto;
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
  grid-template-columns: repeat(3, 1fr);
}
</style>
