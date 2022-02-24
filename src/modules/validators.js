export default function useValidators () {
  const isEmpty = (name, value) => {
    return !value ? `${name} field is required` : ''
  };

  const minLength = (name, value, min) => {
    return value.length < min ? `${name} field must be at least ${min} characters long.` : ''
  };

  const maxLength = (name, value, max) => {
    return value.length >= max ? `${name} field must be at least ${max} characters long.` : ''
  };

  const isEmail = (name, value) => {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !regex.test(value) ? `The input is not a valid  ${name} address` : ""
  }

  const isNum = (name, value) => {
    let regex = /^\d+$/.test(value)
    return !regex ? `The ${name} field can have numbers only.` : ''
  }

  const isCheckboxRequired = (name, value) => {
    return !value.length ? `At least one option must be selected for ${name}.` : ''
  }

  const isToggleSwitchOn = (name, value) => {
    if (value === undefined) {
      return `Please select ${name}.`
    }

    return !value

  }

  return { isEmpty, minLength, maxLength, isEmail, isNum, isCheckboxRequired, isToggleSwitchOn };
}
