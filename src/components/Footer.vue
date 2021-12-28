<template>
  <div class="footer">
    <div class="contact">Contact Us</div>

    <div class="follow-us">Follow Us</div>
    <FontAwesomeIcon :icon="instagram" />
    <FontAwesomeIcon :icon="facebook" />
    <FontAwesomeIcon :icon="email" />
    <FontAwesomeIcon :icon="address" />
    <FontAwesomeIcon :icon="phone" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faEnvelope, faMapMarkerAlt,faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
export default {
  components: { FontAwesomeIcon },
  setup () {
    return { instagram: faInstagram, facebook: faFacebookF, email: faEnvelope, address: faMapMarkerAlt, phone: faPhoneAlt }
  }
}
</script>

<style scoped>
.footer {
  background-image: url("../assets/DSC_1593.NEF.jpg");
  background-position: center;
  background-size: cover;
  box-shadow: inset 0px 0px 200px black;
  height: 140px;

  font-family: "Marck Script", cursive;
  font-weight: 400;
  font-size: 24px;
  color: white;
}
</style>
