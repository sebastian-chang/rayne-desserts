<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <!-- Normal text input -->
    <div class="group">
      <Text
        v-if="type==='text'"
        :name="name"
        :label="label"
        v-model="inputText"
        :required="required"
      />
      <!-- Number input -->
      <Number
        v-if="type === 'number'"
        :name="name"
        :label="label"
        v-model="inputText"
        :required="required"
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
      <Email
        v-if="type === 'email'"
        :name="name"
        :label="label"
        v-model="inputText"
        :required="required"
      />
      <!-- Phone input -->
      <Phone
        v-if="type ==='phone'"
        :name="name"
        :label="label"
        v-model="inputText"
        :required="required"
      />
      <!-- Textarea input -->
      <Message
        v-if="type ==='textarea'"
        :name="name"
        :label="label"
        v-model="inputText"
        :required="required"
      />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import Text from './Inputs/Text.vue'
import Phone from './Inputs/Phone.vue'
import Email from './Inputs/Email.vue'
import Number from './Inputs/Number.vue'
import Message from './Inputs/TextArea.vue'

export default {
  components: {
    Text,
    Phone,
    Email,
    Number,
    Message
  },
  props: ['type', 'name', 'required', 'modelValue', 'label'],
  setup (props, { emit }) {
    const inputText = computed(({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value)
    }))

    return { inputText }
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
  :deep(.form_field) {
    font-family: inherit;
    width: 100%;
    border: 0;
    outline: 0;
    font-size: 1.3rem;
    color: $dark_purple; //dark purple
    padding: 7px 0;
    background: transparent;
    display: block;
    border-bottom: 1px solid $light_purple; //light purple

    &:focus {
      outline: none;
    }
    &:focus ~ label,
    &:valid ~ label {
      top: -14px;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 700;
      color: $dark_purple; //dark-purple
    }
    &:focus ~ .bar:before {
      width: 100%;
    }
  }
  :deep(.form_textarea) {
    resize: none;
    max-width: 100%;
    min-width: 100%;
  }
  // Placeholder text
  :deep(.form_field::-webkit-input-placeholder) {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
  :deep(.form_field:focus::-webkit-input-placeholder) {
    opacity: 1;
    transition-delay: 0.2s;
  }
  :deep(.form_field::-moz-placeholder) {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
  :deep(.form_field:focus::-moz-placeholder) {
    opacity: 1;
    transition-delay: 0.2s;
  }

  :deep(.form_field[type="password"]) {
    letter-spacing: 0.3em;
  }

  :deep(label) {
    color: $light_purple; //light purple
    font-size: 1.2rem;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 15px;
    transition: 0.3s ease all;
  }

  :deep(.bar) {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: "";
      height: 2px;
      width: 0;
      bottom: 0px;
      position: absolute;
      background: $dark_purple; //dark-purple
      transition: 0.3s ease all;
      left: 0%;
    }
  }
}
</style>
