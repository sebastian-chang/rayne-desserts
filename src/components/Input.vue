<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <!-- Normal text input -->
    <div class="group">
      <input
        v-if="type === 'text'"
        type="text"
        id="{name}"
        class="form_field"
        :placeholder="inputPlaceholder"
        v-model="inputText"
        autocomplete="off"
        required
      />
      <!-- Password input -->
      <!-- <div class="group" v-if="type === 'password'">
    <input
      type="password"
      id="{name}"
      :placeholder="name"
      v-model="inputText"
      autocomplete="off"
      required="{required}"
      />-->
      <!-- Email input -->
      <input
        v-if="type === 'email'"
        type="email"
        id="{name}"
        class="form_field"
        :placeholder="inputPlaceholder"
        v-model="inputText"
        autocomplete="off"
        required
      />
      <!-- Phone input -->
      <input
        v-if="type === 'phone'"
        type="text"
        id="{name}"
        class="form_field"
        :placeholder="inputPlaceholder"
        v-model="inputText"
        autocomplete="off"
        @keypress="phoneValidation($event)"
        @input="phoneMask()"
        required
      />
      <!-- Textarea input -->
      <textarea
        v-if="type === 'textarea'"
        class="form_field form_textarea"
        name="{name}"
        cols="30"
        rows="10"
        v-model="inputText"
        required
      ></textarea>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{ inputLabel }}</label>
    </div>
  </div>
</template>

<script>
import { ref, toRef, } from '@vue/reactivity'
export default {
  props: ['type', 'name', 'required'],
  setup (props) {
    const inputText = ref('')
    const inputLabel = ref('')
    const inputPlaceholder = ref('')

    const phoneRegex = /^[0-9\s]*$/;
    const threeDigitRegex = /^(\d{3})$/gm
    const sixDigitRegex = /^(\d{3})(\d{1,3})$/gm
    const tenDigitRegex = /^(\d{3})(\d{3})(\d{1,4})$/gm
    const twelveDigitRegex = /^(\d{1,3})(\d{3})(\d{3})(\d{4})$/gm

    if (props.type === 'text') {
      const temp = toRef(props.name)._object
      inputPlaceholder.value = temp
      inputLabel.value = temp
    }
    else if (props.type === 'phone') {
      inputPlaceholder.value = '(123) 456-7890'
      inputLabel.value = 'Phone'
    }
    else if (props.type === 'email') {
      inputPlaceholder.value = 'your@email.com'
      inputLabel.value = 'Email'
    }
    else if (props.type === 'textarea') {
      inputLabel.value = 'Message'
    }

    const phoneValidation = event => {
      if (phoneRegex.test(event.key)) {
        return true
      }
      else {
        event.preventDefault()
        return false
      }
    }
    const phoneMask = () => {
      const cleanPhoneText = inputText.value.replace(/\D/gm, '')
      let maskPhoneText = ''
      if (cleanPhoneText.length <= 3) {
        maskPhoneText = cleanPhoneText.replace(threeDigitRegex, "($1)")
      }
      else if (cleanPhoneText.length > 3 && cleanPhoneText.length < 7) {
        maskPhoneText = cleanPhoneText.replace(sixDigitRegex, "($1) $2")
      }
      else if (cleanPhoneText.length >= 7 && cleanPhoneText.length <= 10) {
        maskPhoneText = cleanPhoneText.replace(tenDigitRegex, "($1) $2-$3")
      }
      else {
        maskPhoneText = cleanPhoneText.replace(twelveDigitRegex, "+$1 ($2) $3-$4")
      }
      inputText.value = maskPhoneText
    }

    return { inputText, inputLabel, inputPlaceholder, phoneValidation, phoneMask }
  }

}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
  }

  // INPUTS // ============================== //
  .form_field {
    font-family: inherit;
    width: 100%;
    border: 0;
    outline: 0;
    font-size: 1.3rem;
    color: themed('secondary-color'); //dark purple
    padding: 7px 0;
    background: transparent;
    display: block;
    border-bottom: 1px solid themed('main-color'); //light purple

    &:focus {
      outline: none;
    }
    &:focus ~ label,
    &:valid ~ label {
      top: -14px;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 700;
      color: themed('secondary-color'); //dark-purple
    }
    &:focus ~ .bar:before {
      width: 100%;
    }
  }
  .form_textarea {
    resize: none;
    max-width: 100%;
    min-width: 100%;
  }
  // Placeholder text
  .form_field::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
  .form_field:focus::-webkit-input-placeholder {
    opacity: 1;
    transition-delay: 0.2s;
  }
  .form_field::-moz-placeholder {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
  .form_field:focus::-moz-placeholder {
    opacity: 1;
    transition-delay: 0.2s;
  }

  .form_field[type="password"] {
    letter-spacing: 0.3em;
  }

  label {
    color: themed('main-color'); //light purple
    font-size: 1.2rem;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 15px;
    transition: 0.3s ease all;
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: "";
      height: 2px;
      width: 0;
      bottom: 0px;
      position: absolute;
      background: themed('secondary-color'); //dark-purple
      transition: 0.3s ease all;
      left: 0%;
    }
  }
}
</style>
