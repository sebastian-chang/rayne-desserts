<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-main">
          <div class="footer-item text-area">
            <h3 class="footer-header">Rayne Desserts</h3>
            <p>
              All cakes and desserts are made to order fresh from scratch and
              are never frozen. Gluten Free, Dairy Free & Vegan options are
              available at special request.
            </p>
          </div>
          <div class="contact footer-item text-area">
            <h3 class="footer-header cursor" @click="onUserClick('Contact')">
              Contact Us
            </h3>
          </div>
          <div class="contact footer-item text-area">
            <h3 class="footer-header cursor" @click="onUserClick('FAQ')">
              FAQ
            </h3>
          </div>
          <div class="follow-us footer-item text-area">
            <h3 class="footer-header">Follow Us</h3>
            <FontAwesomeIcon
              @click="onUserClick('Instagram')"
              :icon="instagram"
              class="social-icons cursor"
            />
            <FontAwesomeIcon
              @click="onUserClick('Facebook')"
              :icon="facebook"
              class="social-icons cursor"
            />
            <FontAwesomeIcon
              @click="onUserClick('Youtube')"
              :icon="youtube"
              class="social-icons cursor"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <div class="row">
          <div class="footer-copyright-main">
            <p>@2022 Copyright: Saving Bogey</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'
export default {
  components: { FontAwesomeIcon },
  setup () {
    const router = useRouter()
    const onUserClick = (linkTo) => {
      router.push({ name: linkTo })
      window.scrollTo(0,0);
    }
    return { instagram: faInstagram, facebook: faFacebookF, email: faEnvelope, address: faMapMarkerAlt, phone: faPhoneAlt, youtube: faYoutube, onUserClick }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-image: url("../../assets/DSC_1593.NEF.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0px 0px 200px black;
  height: 200px;

  font-family: "Marck Script", cursive;
  font-weight: 400;
  font-size: 24px;
  color: white;

  margin-top: 80px;
  padding-top: 55px;
  padding-bottom: 55px;

  .footer-header {
    font-size: $SB_H3_Font_Size;

    &:after {
      content: " ";
      display: block;
      border: 1px solid #fff;
      border-radius: 4px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
      -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
      width: 50px;
      margin: 10px 0px;
    }
  }

  p {
    font-size: $SB_Base_Font_Size;
    font-family: $SB_Main_Font;
    letter-spacing: 0.5px;
  }

  @media screen and (max-width: 575px) {
    height: fit-content;
    padding-bottom: 0px;
  }
}
.container {
  width: $SB_Container_Large;
  max-width: 100%;
  margin: auto;
  padding-left: $SB_Gutter_Width;
  padding-right: $SB_Gutter_Width;

  @media screen and (max-width: 767px) {
    width: inherit;
    padding-left: $SB_Gutter_Width;
    padding-right: $SB_Gutter_Width;
  }
}
.footer-main {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.footer-item {
  margin-bottom: 30px;
  width: calc(25% - calc($SB_Gutter_Width / 2));

  @media screen and (max-width: 575px) {
    width: 100%;
    margin-bottom: 40px;
  }
}

.social-icons {
  width: 35px;
  height: 35px;
  margin: 0 10px;
  transition: color 0.3s ease-in-out;

  &:first-of-type {
    margin-left: 0px;
  }

  &:hover {
    color: $light_purple;
    --webkit-filter: drop-shadow(1px 1px 5px $dark_purple);
    filter: drop-shadow(1px 1px 5px $dark_purple);
  }
}

.footer-copyright {
  display: flex;
  flex-wrap: wrap;
  background-color: $light_purple;
  line-height: 2em;
  font-family: $SB_Main_Font;
  font-size: $SB_Small_Font_Size;

  .footer-copyright-main {
    padding: 5px 0;
  }
}
</style>
