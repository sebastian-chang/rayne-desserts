<template>
  <div class="contact-card">
    <div v-if="card.label !== ''">
      <div class="contact-icon">
        <FontAwesomeIcon :icon="card.icon" />
      </div>
      <h5 class="contact-label">
        {{ card.label }}
      </h5>
      <p class="contact-text">
        {{ card.text }}
      </p>
    </div>
    <div v-else>...Loading</div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { onMounted, reactive } from 'vue'
export default {
  components: { FontAwesomeIcon },
  props: ['cardStyle'],
  setup (style) {
    const card = reactive({
      icon: '',
      label: '',
      text: '',
    })
    onMounted(() => {
      if (style.cardStyle === 'address') {
        Object.assign(card, {
          icon: faMapMarkerAlt,
          label: 'Address',
          text: 'Austin, TX, 78748 USA'
        })
      }
      else if (style.cardStyle === 'phone') {
        Object.assign(card, {
          icon: faPhoneAlt,
          label: 'Phone',
          text: '832-445-4222'
        })
      }
      else if (style.cardStyle === 'email') {
        Object.assign(card, {
          icon: faEnvelope,
          label: 'Email',
          text: 'info@raynedesserts.com'
        })
      }
    })
    return { card }
  }
}
</script>

<style scoped>
.contact-card {
  border: 1px solid #c8afd3;
  border-radius: 5px;
  padding: 25px;
  text-align: left;
  transition: all 0.3s linear;
}
.contact-icon {
  display: inline-block;
  background: #c8afd3;
  color: white;
  font-size: 20px;
  text-align: center;
  height: 50px;
  width: 50px;
  line-height: 50px;
  position: relative;
  border-radius: 5px;
  transition: all 0.3s linear;
}
.contact-card:hover{
  border: 1px solid #a575ba;
}
.contact-card:hover .contact-icon{
  background: #a575ba;
  height: 55px;
  width: 55px;
}
.contact-card:hover .contact-label,
.contact-card:hover .contact-text{
  font-size: 21px;
}
.contact-label {
  letter-spacing: 0;
  margin-top: 30px;
  margin-bottom: 15px;
  font-family: "Marck Script", cursive;
  font-weight: 400;
  font-size: 20px;
  transition: all 0.3s linear;
}
.contact-text {
  letter-spacing: 0.5px;
  transition: all 0.3s linear;
}
</style>
