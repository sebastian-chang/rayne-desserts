<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <p class="checkbox_group_header">{{ label }}</p>
    <div class="checkbox_group">
      <li v-for="item in items" :key="item.id">
        <input
          type="checkbox"
          :id="`${name}-${item.id}`"
          :value="item.name"
          v-model="userItems"
          :disabled="
            userItems.length >= maxPicks && userItems.indexOf(item.name) === -1
          "
          @change="validateInput"
          class="checkbox cursor"
          :required="required && !userItems.length"
        />
        <label class="cursor" :for="`${name}-${item.id}`">
          {{ item.name }}
        </label>
      </li>
    </div>
    <div class="notification_label" v-if="errors[name]">{{ errors[name] }}</div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import userFormValidation from '../modules/userFormValidation'
import { onMounted } from '@vue/runtime-core'
export default {
  props: ['items', 'maxPicks', 'name', 'modelValue', 'required', 'label'],
  setup (props, { emit }) {
    const userItems = computed(({
      get: () => props.modelValue,
      set: value => emit('update:modelValue', value)
    }))

    const { errors, validateCheckboxGroup } = userFormValidation()
    const validateInput = () => {
      validateCheckboxGroup(props.name, userItems.value, props.required)
    }

    onMounted(() => {
      if (props.required) {
        validateInput()
      }
    })

    return { userItems, errors, validateInput }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    .checkbox_group_header {
      color: themed("checkbox-font-color");
      font-family: themed("serif-font");
      font-size: 18px;
      font-weight: 400;
      // border-bottom: 1px solid $dark_purple;
      width: fit-content;
      margin-bottom: 36px;
    }
    .checkbox_group {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;

      .checkbox {
        -webkit-appearance: none;
        -moz-appearance: none;
        height: 21px;
        outline: none;
        display: inline-block;
        vertical-align: top;
        position: relative;
        margin: 0px;
        border: themed("checkbox-border");
        background: themed("checkbox-background-color");
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
          background: themed("checkbox-background-checked");
        }
        &:disabled {
          cursor: not-allowed;
          opacity: 0.2;
          &:checked {
            border: 1px solid #f6f8ff;
            background: #e1e6f9;
          }
          & + label {
            cursor: not-allowed;
            opacity: 0.2;
          }
        }
        &:hover,
        &:focus {
          // &:not(:checked) {
          &:not(:disabled) {
            // --bc: var(--border-hover);
            // border: themed("checkbox-border-highlight");
            box-shadow: themed("switch-focus-boxshadow");
          }
          // }
        }
        &:focus {
          box-shadow: 0 0 0 var(--focus);
          box-shadow: themed("switch-focus-boxshadow");
        }
        &:not(.switch) {
          width: 21px;
          &:after {
            opacity: var(--o, 0);
          }
          &:checked {
            --o: 1;
          }
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
      .checkbox {
        border-radius: 7px;
        &:after {
          width: 5px;
          height: 9px;
          border: themed("checkbox-check-border");
          border-top: 0;
          border-left: 0;
          left: 6px;
          top: 2px;
          transform: rotate(var(--r, 20deg));
        }
        &:checked {
          --r: 43deg;
          & + label {
            color: themed("checkbox-font-highlight");
            font-weight: 400;
          }
        }
      }
    }
    .notification_label {
      color: themed("checkbox-font-highlight");
      text-transform: capitalize;
      font-size: $SB_Small_Font_Size;
      font-weight: 700;
      padding-top: 20px;
      width: 75%;
    }
  }
}
</style>
