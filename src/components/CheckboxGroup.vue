<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <p class="checkbox_group_header">{{name}}</p>
    <div class="checkbox_group">
      <li v-for="item in items" :key="item.id">
        <input
          type="checkbox"
          :id="`${name}-${item.id}`"
          :value="item.name"
          v-model="userItems"
          :disabled="userItems.length >= maxPicks && userItems.indexOf(item.name) === -1"
          class="checkbox cursor"
        />
        <label class="cursor" :for="`${name}-${item.id}`">{{item.name}}</label>
      </li>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  props: ['items', 'maxPicks', 'name'],
  setup () {
    const userItems = ref([])

    return { userItems }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    .checkbox_group_header{
      color: $dark_purple;
      font-family: themed('serif-font');
      font-size: 18px;
      font-weight: 700;
      // border-bottom: 1px solid $dark_purple;
      width: fit-content;
    }
    .checkbox_group {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;

      .checkbox {
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
        margin: 0px;
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
          // border: 1px solid var(--bc, var(--disabled));
          cursor: not-allowed;
          opacity: 0.2;
          &:checked {
            --b: var(--disabled-inner);
            --bc: var(--border);
          }
          & + label {
            cursor: not-allowed;
            opacity: 0.2;
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
          // cursor: pointer;
          margin-left: 20px;
          font-family: themed("serif-font");
          color: $light-purple;
        }
      }
      .checkbox {
        border-radius: 7px;
        &:after {
          width: 5px;
          height: 9px;
          border: 2px solid var(--active-inner);
          border-top: 0;
          border-left: 0;
          left: 6px;
          top: 2px;
          transform: rotate(var(--r, 20deg));
        }
        &:checked {
          --r: 43deg;
          & + label {
            color: $dark-purple;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
