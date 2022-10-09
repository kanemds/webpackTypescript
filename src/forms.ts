export const formData = (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input')
  let values: { [prop: string]: string } = {}

  inputs.forEach(input => {
    // <input type="text" id="name" required>
    values[input.id] = input.value
  })
  return values
}