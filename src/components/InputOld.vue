<template>
  <div class="form__group">
    <textarea
      v-if="type === 'textarea'"
      class="form__field form__textarea"
      name="{name}"
      cols="30"
      rows="10"
    ></textarea>
    <input
      v-else
      type="input"
      class="form__field"
      placeholder="{name}"
      name="{name}"
      id="{name}"
      v-model="inputText"
      @focus="testFocus"
      @change="testChange"
      required="{required}"
    />
    <label for="name" class="form__label">{{ label }}</label>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  props: ['placeholder', 'name', 'required', 'label', 'type'],
  setup (props) {
    const inputText = ref('')
    const testFocus = () => {
      if (props.name === 'Phone' && inputText.value === '') {
        inputText.value = '1234567890'
      }
    }

    const testChange = () => {
      if (props.name === 'Phone') {
        const pattern = inputText.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        console.log('PREP', inputText.value)
        inputText.value = !pattern[2] ? pattern[1] : '(' + pattern[1] + ') ' + pattern[2] + (pattern[3] ? '-' + pattern[3] : '');
        console.log('Testing focus of input')
        console.log(inputText.value)
      }
    }

    return { testChange, testFocus, inputText }
  }
}
</script>

<style lang="scss" scoped>
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: $dark-purple;
  padding: 7px 0;
  background: transparent;
  transition: border-bottom 0.2s ease-out;
}
.form__textarea {
  max-width: 100%;
  min-width: 100%;
}
.form__field::placeholder {
  color: transparent;
}

.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $light-purple;
}

.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $dark-purple;
  font-weight: 700;
  transform: translateY(-3px);
}
.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $dark-purple, $light-purple);
  border-image-slice: 1;
}
/* reset input */
.form__field:required,
.form__field:invalid {
  box-shadow: none;
}
</style>
