import { reactive } from '@vue/reactivity';
import useValidators from "./validators.js";

const errors = reactive({});

export default function userFormValidation () {
  const { isEmpty, minLength, isEmail, isCheckboxRequired, isToggleSwitchOn } = useValidators();

  const validateNameField = (name, value) => {
    errors[name] = !value ? isEmpty(name, value) : minLength(name, value, 4);
  };

  const validatePhoneField = (name, value) => {
    errors[name] = !value ? isEmpty(name, value) : minLength(name, value, 10);
  }

  const validateEmailField = (name, value) => {
    errors[name] = !value ? isEmpty(name, value) : isEmail(name, value)
  }

  const validateTextField = (name, value) => {
    errors[name] = !value ? isEmpty(name, value) : ''
  }

  const validateCheckboxGroup = (name, value, required) => {
    errors[name] = required ? isCheckboxRequired(name, value) : ''
  }

  const validateToggleSwitch = (name, value, required) => {
    errors[name] = required ? isToggleSwitchOn(name, value) : ''
  }

  return {
    errors,
    validateNameField,
    validatePhoneField,
    validateEmailField,
    validateTextField,
    validateCheckboxGroup,
    validateToggleSwitch,
  };
}
