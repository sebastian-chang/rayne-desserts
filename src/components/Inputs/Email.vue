<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="group">
      <input
        type="email"
        :id="name"
        class="form_field"
        :placeholder="inputPlaceholder"
        v-model="inputText"
        @input="$emit('update:modelValue', $event.target.value)"
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
    const inputPlaceholder = ref('your@email.com')

    const { errors, validateEmailField } = userFormValidation()

    const validateInput = () => {
      validateEmailField(props.name, inputText.value)
    }

    return { inputText, inputLabel, inputPlaceholder, validateInput, errors }
  }
}
</script>

<style>
</style>
