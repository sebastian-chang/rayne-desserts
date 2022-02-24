import { computed } from '@vue/reactivity'

export default function useSubmitButtonState (form, errors) {
  const isButtonDisabled = computed(() => {
    let disabled = true
    for (let prop in form) {
      if (typeof (form[prop]) === 'boolean') {
        if (errors[prop]) {
          disabled = true
          break
        }
      }
      else if (!form[prop] || errors[prop]) {
        disabled = true
        break
      }
      disabled = false
    }

    return disabled
  })

  return { isButtonDisabled }
}
