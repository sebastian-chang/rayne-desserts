<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="group">
      <textarea
        :id="name"
        :name="name"
        class="form_field form_textarea"
        :class="errors[name] ? 'invalid' : ''"
        :placeholder="inputPlaceholder"
        v-model="inputText"
        @input="$emit('update:modelValue', $event.target.value)"
        @keyup="keyupValidate"
        @blur="validateInput"
        autocomplete="xyz123"
        cols="30"
        rows="10"
        required
      ></textarea>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{ inputLabel }}</label>
    </div>
    <div class="error_label" v-if="errors[name]">
      {{ errors[name] }}
    </div>
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
    const inputPlaceholder = ref(props.label)
    const touched = ref(false)

    const { errors, validateTextField } = userFormValidation()

    const keyupValidate = () => {
      if (touched.value) {
        validateInput()
      }
    }

    const validateInput = () => {
      if (!touched.value) {
        touched.value = true
      }
      validateTextField(props.name, inputText.value)
    }

    return { inputText, inputLabel, inputPlaceholder, validateInput, errors, keyupValidate }
  }
}
</script>

<style>
</style>
