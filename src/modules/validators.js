export default function useValidators () {
  const isEmpty = (name, value) => {
    return !value ? `The ${name} field is required` : ''
  };

  const minLength = (name, value, min) => {
    return value.length < min ? `The ${name} field must be at least ${min} characters long.` : ''
  };

  const isEmail = (name, value) => {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !regex.test(value) ? `The input is not a valid  ${name} address` : ""
  }

  const isNum = (name, value) => {
    let regex = /^\d+$/.test(value)
    return !regex ? `The ${name} field can have numbers only.` : ''
  }

  return { isEmpty, minLength, isEmail, isNum };
}
