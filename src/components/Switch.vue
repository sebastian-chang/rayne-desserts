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
      <label class="cursor" :for="name">{{label}}</label>
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
      --active: #a575ba;
      --active-inner: #fff;
      --focus: 2px rgba(39, 94, 254, 0.3);
      --border: #c8afd3; //#bbc1e1;
      --border-hover: #a575ba;
      --background: #fff;
      --disabled: #f6f8ff;
      --disabled-inner: #e1e6f9;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 21px;
      outline: none;
      display: inline-block;
      vertical-align: top;
      position: relative;
      margin: 0;
      border: 1px solid var(--bc, var(--border));
      background: var(--b, var(--background));
      transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
      &:after {
        content: "";
        display: block;
        left: 0;
        top: 0;
        position: absolute;
        transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
          opacity var(--d-o, 0.2s);
      }
      &:checked {
        --b: var(--active);
        --bc: var(--active);
        --d-o: 0.3s;
        --d-t: 0.6s;
        --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
      }
      &:disabled {
        --b: var(--disabled);
        cursor: not-allowed;
        opacity: 0.9;
        &:checked {
          --b: var(--disabled-inner);
          --bc: var(--border);
        }
        & + label {
          cursor: not-allowed;
        }
      }
      &:hover {
        &:not(:checked) {
          &:not(:disabled) {
            --bc: var(--border-hover);
          }
        }
      }
      &:focus {
        box-shadow: 0 0 0 var(--focus);
      }
      & + label {
        font-size: 1rem;
        // font-weight: 700;
        line-height: 21px;
        display: inline-block;
        vertical-align: top;
        // cursor: pointer;
        margin-left: 20px;
        font-family: themed("serif-font");
        color: $light-purple;
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
        background: var(--ab, var(--border));
        transform: translateX(var(--x, 0));
      }
      &:checked {
        --ab: var(--active-inner);
        --x: 17px;
        & + label {
          color: $dark-purple;
          font-weight: 700;
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
