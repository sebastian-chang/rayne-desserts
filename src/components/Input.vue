<template>
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
    /> -->
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
      required
    />
    <!-- Textarea input -->
    <textarea
      v-if="type === 'textarea'"
      class="form_field form_textarea"
      name="{name}"
      cols="30"
      rows="10"
      required
    ></textarea>
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>{{ inputLabel }}</label>
  </div>
</template>

<script>
import { ref, toRef } from '@vue/reactivity'
export default {
  props: ['type', 'name', 'required'],
  setup (props) {
    const inputText = ref('')
    const inputLabel = ref('')
    const inputPlaceholder = ref('')

    if (props.type === 'text') {
      const temp = toRef(props.name)._object
      inputPlaceholder.value = temp
      inputLabel.value = temp
    }
    else if (props.type === 'phone') {
      inputPlaceholder.value = '1234567890'
      inputLabel.value = 'Phone'
    }
    else if (props.type === 'email') {
      inputPlaceholder.value = 'your@email.com'
      inputLabel.value = 'Email'
    }
    else if (props.type === 'textarea') {
      inputLabel.value = 'Message'
    }

    return { inputText, inputLabel, inputPlaceholder }
  }

}
</script>

<style lang="scss" scoped>
$trans-time: 300ms;
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
  // border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: $dark-purple;
  padding: 7px 0;
  // background: transparent;
  // transition: border-bottom 0.2s ease-out;

  background: transparent;
  // color: $muted-color;
  // font-size: 18px;
  // padding: 10px 10px 10px 5px;
  display: block;
  // width: $width;
  // border: none;
  // border-radius: 0;
  border-bottom: 1px solid $light-purple;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -14px;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 700;
    color: $dark-purple;
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
  color: $light-purple;
  font-size: 1.2rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 15px;
  transition: $trans-time ease all;
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
    background: $dark-purple;
    transition: $trans-time ease all;
    left: 0%;
  }
}

// BUTTONS // ============================== //
// .btn {
//   background: #fff;
//   color: mix(black, $muted-color, 25%);
//   border: none;
//   padding: 10px 20px;
//   border-radius: 3px;
//   letter-spacing: 0.06em;
//   text-transform: uppercase;
//   text-decoration: none;
//   outline: none;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
//   &:hover {
//     color: mix(black, $muted-color, 30%);
//     box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18), 0 5px 5px rgba(0, 0, 0, 0.12);
//   }
//   &.btn-link {
//     background: $hl-color;
//     color: mix(white, $hl-color, 80%);
//     &:hover {
//       background: darken($hl-color, 5%);
//       color: mix(white, $hl-color, 85%);
//     }
//   }
//   &.btn-submit {
//     background: $hl-color;
//     color: mix(white, $hl-color, 70%);
//     &:hover {
//       background: darken($hl-color, 5%);
//       color: mix(white, $hl-color, 85%);
//     }
//   }
//   &.btn-cancel {
//     background: #eee;
//     &:hover {
//       background: darken(#eee, 5%);
//       color: mix(black, $muted-color, 30%);
//     }
//   }
// }

// .btn-box {
//   text-align: center;
//   margin: 50px 0;
// }
</style>
