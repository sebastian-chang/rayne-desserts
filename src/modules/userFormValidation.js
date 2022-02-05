import { reactive } from '@vue/reactivity';
import useValidators from "./validators.js";

const errors = reactive({});

export default function userFormValidation () {
  const { isEmpty, minLength } = useValidators();

  const validateNameField = (name, value) => {
    // errors[name] = value === '' ? `The ${name} field is required` : '';
    errors[name] = !value ? isEmpty(name, value) : minLength(name, value, 4);
  };

  return { errors, validateNameField };
}
