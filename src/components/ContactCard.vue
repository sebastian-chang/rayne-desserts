<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="contact-card">
      <div v-if="card.label !== ''" @click="onUserClick(card.label)" class="cursor">
        <div class="contact-icon">
          <FontAwesomeIcon :icon="card.icon" />
        </div>
        <h5 class="contact-label">{{ card.label }}</h5>
        <p class="contact-text">{{ card.text }}</p>
      </div>
      <div v-else>...Loading</div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: { FontAwesomeIcon },
  props: ['cardStyle'],
  setup (style) {
    const router = useRouter()
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
          text: process.env.VUE_APP_PHONE
        })
      }
      else if (style.cardStyle === 'email') {
        Object.assign(card, {
          icon: faEnvelope,
          label: 'Email',
          text: process.env.VUE_APP_EMAIL
        })
      }
    })

    const onUserClick = (linkTo) => {
      router.push({ name: linkTo })
    }
    return { card, onUserClick }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .contact-card {
    border: 1px solid themed('main-color');
    border-radius: 5px;
    padding: 25px;
    margin: 15px;
    max-width: 275px;
    text-align: left;
    // font-family: themed('serif-font');
    transition: all 0.3s linear;
    overflow-wrap: break-word;
  }
  .contact-icon {
    display: inline-block;
    background: themed('main-color');
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
  .contact-card:hover {
    border: 1px solid $dark-purple;
  }
  .contact-card:hover .contact-icon {
    background: $dark-purple;
  }
  .contact-label {
    letter-spacing: 0;
    margin-top: 30px;
    margin-bottom: 15px;
    font-family: themed('cursive-font');
    font-weight: 400;
    font-size: 20px;
    transition: all 0.3s linear;
  }
  .contact-text {
    letter-spacing: 0.5px;
    transition: all 0.3s linear;
  }
}
</style>
