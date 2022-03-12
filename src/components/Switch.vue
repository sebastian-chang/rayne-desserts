<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="switch_group">
      <input
        type="checkbox"
        :id="name"
        @change="validateInput()"
        class="switch cursor"
        v-model="inputValue"
        :required="required"
      />
      <label class="cursor" :for="name">{{ label }}</label>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import userFormValidation from '../modules/userFormValidation'
import { onMounted } from '@vue/runtime-core'
export default {
  props: ['name', 'modelValue', 'required', 'label'],
  setup (props, { emit }) {
    const inputValue = computed(({
      get: () => props.modelValue,
      set: value => emit('update:modelValue', value)
    }))

    const { validateToggleSwitch } = userFormValidation()
    const validateInput = () => {
      validateToggleSwitch(props.name, inputValue.value, props.required)
    }

    onMounted(() => {
      validateInput()
    })

    return { inputValue, validateInput }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    .switch {
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 21px;
      outline: none;
      display: inline-block;
      vertical-align: top;
      position: relative;
      margin: 0;
      border: themed("checkbox-border");
      background: themed("switch-background-color");
      transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
      &:after {
        content: "";
        display: block;
        left: 0;
        top: 0;
        position: absolute;
        transition: transform 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2),
          opacity 0.3s;
      }
      &:checked {
        background: themed("switch-background-hightlight");
      }
      &:disabled {
        cursor: not-allowed;
        opacity: 0.9;
        &:checked {
          border: 1px solid #f6f8ff;
          background: #e1e6f9
        }
        & + label {
          cursor: not-allowed;
        }
      }
      &:hover {
        &:not(:checked) {
          &:not(:disabled) {
            border: themed("checkbox-border-hightlight");
          }
        }
      }
      &:focus {
        box-shadow: themed('switch-focus-boxshadow');
      }
      & + label {
        font-size: 1rem;
        // font-weight: 700;
        line-height: 21px;
        display: inline-block;
        vertical-align: top;
        margin-left: 20px;
        font-family: themed("serif-font");
        color: themed("checkbox-font-color");
      }
    }
    .switch {
      width: 38px;
      border-radius: 11px;
      &:after {
        left: 2px;
        top: 2px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background: themed("checkbox-background-color");
        transform: translateX(var(--x, 0));
      }
      &:checked {
        --x: 17px;
        & + label {
          color: themed("checkbox-font-highlight");
          font-weight: 400;
        }
      }
      &:disabled {
        &:not(:checked) {
          &:after {
            opacity: 0.6;
          }
        }
      }
    }
  }
}
</style>
