<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="contact-card cursor">
      <div
        v-if="card.label !== ''"
        @click="onUserClick(card.label)"
        class="contact-card-header"
      >
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
    border: 1px solid themed("contact-border-color");
    border-radius: 5px;
    padding: 25px;
    margin: 15px auto;
    max-width: 275px;
    // height: 200px;
    text-align: left;
    // font-family: themed('serif-font');
    transition: all 0.3s linear;
    overflow-wrap: break-word;
  }
  .contact-card-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .contact-icon {
    display: inline-block;
    grid-column: 1/1;
    background: themed("contact-border-color");
    color: white;
    font-size: 30px;
    text-align: center;
    height: 50px;
    width: 50px;
    line-height: 50px;
    position: relative;
    border-radius: 5px;
    transition: all 0.3s linear;
  }
  .contact-card:hover {
    border: 1px solid themed("contact-border-highlight");
  }
  .contact-card:hover .contact-icon {
    background: themed("contact-border-highlight");
  }
  .contact-label {
    grid-column: 2/4;
    letter-spacing: 0;
    margin-top: 15px;
    margin-bottom: 15px;
    font-family: themed("cursive-font");
    font-weight: 400;
    font-size: 25px;
    color: themed("contact-label-color");
    transition: all 0.3s linear;
  }
  .contact-text {
    grid-column: 1/4;
    letter-spacing: 0.5px;
    transition: all 0.3s linear;
    margin: 50px auto;
    // margin-top: 50px;
  }

  @media screen and (min-width: 576px) {
    .contact-text{
      margin: 50px 0px;
    }
  }
}
</style>
