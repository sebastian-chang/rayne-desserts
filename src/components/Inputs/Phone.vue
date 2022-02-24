<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="group">
      <input
        type="text"
        :id="name"
        class="form_field"
        :placeholder="inputPlaceholder"
        v-model="inputText"
        @input="$emit('update:modelValue', $event.target.value), phoneMask()"
        @keydown.delete="onDelete($event)"
        @keyup="validateInput"
        @blur="validateInput"
        autocomplete="off"
        required
      />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{ inputLabel }}</label>
    </div>
    <div class="ui basic label pointing red" v-if="errors[name]">{{ errors[name] }}</div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import userFormValidation from '../../modules/userFormValidation'
export default {
  props: ['name', 'required', 'label'],
  setup (props) {
    const inputText = ref('')
    const inputLabel = ref(props.label)
    const cleanInput = ref('')
    const inputPlaceholder = ref('(800) 555-1234')

    const threeDigitRegex = /^(\d{3})$/gm
    const sixDigitRegex = /^(\d{3})(\d{1,3})$/gm
    const tenDigitRegex = /^(\d{3})(\d{3})(\d{1,4})$/gm
    const twelveDigitRegex = /^(\d{1,3})(\d{3})(\d{3})(\d{4})$/gm

    const { errors, validatePhoneField } = userFormValidation()

    const validateInput = () => {
      validatePhoneField(props.name, cleanInput.value)
    }
    const phoneMask = () => {
      const cleanPhoneText = inputText.value.replace(/\D/gm, '')
      cleanInput.value = inputText.value.replace(/\D/gm, '')
      let maskPhoneText = ''
      if (cleanPhoneText.length < 3) {
        maskPhoneText = cleanPhoneText.replace(threeDigitRegex, "$1")
      }
      else if (cleanPhoneText.length >= 3 && cleanPhoneText.length < 7) {
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

    const onDelete = event => {
      const target = event.target
      const postion = target.selectionStart
      setTimeout(() => {
        target.selectionEnd = postion - 1
      }, (100));
    }

    return { inputText, inputLabel, inputPlaceholder, validateInput, errors, phoneMask, onDelete }
  }
}
</script>

<style>
</style>
