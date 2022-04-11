<template>
  <footer :class="`rayne-${this.$store.state.theme}`">
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-main">
            <div class="footer-item text-area" @click="onUserClick('About')">
              <h3 class="footer-header cursor">Rayne Desserts</h3>
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
    }
    return { instagram: faInstagram, facebook: faFacebookF, email: faEnvelope, address: faMapMarkerAlt, phone: faPhoneAlt, youtube: faYoutube, onUserClick }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .footer {
    background-image: url("../../assets/DSC_1593.NEF.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0px 0px 200px black;
    height: fit-content;

    font-family: themed("cursive-font");
    font-weight: 400;
    font-size: 24px;
    color: themed("footer-font-color");

    margin-top: 80px;
    padding-top: 55px;
    padding-bottom: 0;

    .footer-header {
      font-size: themed("footer-header-font-size");

      &:after {
        content: " ";
        display: block;
        border: themed("footer-underline-border");
        border-radius: 4px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
        -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
        width: 50px;
        margin: 10px 0px;
        transition: color 0.3s ease-in-out;
      }
    }

    p {
      padding-right: 1.5rem;
      font-size: themed("paragraph-font-size");
      font-family: themed("serif-font");
      letter-spacing: 0.5px;
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
    margin-bottom: 40px;
    width: 100%;

    > .cursor {
      transition: color 0.3s ease-in-out;
      &:hover {
        color: themed("footer-icons-hover");
        --webkit-filter: themed("footer-icons-hover-filter");
        filter: themed("footer-icons-hover-filter");
      }
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
      color: themed("footer-icons-hover");
      --webkit-filter: themed("footer-icons-hover-filter");
      filter: themed("footer-icons-hover-filter");
    }
  }

  .footer-copyright {
    display: flex;
    flex-wrap: wrap;
    background-color: themed("footer-copyright-background-color");
    line-height: 2em;
    font-family: themed("serif-font");
    font-size: $SB_Small_Font_Size;

    .footer-copyright-main {
      padding: 5px 0;
    }
  }

  @media screen and (min-width: $SB_Breakpoint_LG) {
    .footer-item {
      width: calc(25% - calc($SB_Gutter_Width / 2));
    }
  }
}
</style>
