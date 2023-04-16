const form = document.querySelector("#form")
const checkEmail = document.querySelector(".form-input")
const alertMensage = document.querySelector(".alert-menssagem")

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if(checkEmail.value == '') {
    alert("Favor preencher corretamente e-mail")
  } else {
    setTimeout(alertMensage.textContent = 'E-mail cadastrado com sucesso', 1000)}
})