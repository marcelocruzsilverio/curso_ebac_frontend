const form = document.getElementById("form-number");
const inputFirstNumber = document.getElementById("first-number");
const inputSecondNumber = document.getElementById("second-number");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".error-message");
const button = document.getElementById("send-btn");
let formIsValid = false;

function validateForm(fisrtNumber, secondNumber) {
  if (typeof fisrtNumber !== "number" || typeof secondNumber !== "number") {
    return false;
  } else {
    return secondNumber > fisrtNumber;
  }
}

function checkInput() {
  inputFirstNumber.addEventListener("keyup", function () {
    const firstNumber = parseFloat(inputFirstNumber.value);
    const secondNumber = parseFloat(inputSecondNumber.value);
    formIsValid = validateForm(firstNumber, secondNumber);

    if (formIsValid) {
      errorMessage.classList.remove("error");
      errorMessage.textContent = "";
      inputFirstNumber.style = "";
      button.disable = false;
    } else {
      errorMessage.classList.add("error");
      errorMessage.textContent =
        "Formulário inválido: o primeiro número precisa ser menor que o segundo.";
      inputFirstNumber.style.border = "2px solid red";
      button.disable = true;
    }
  });

  inputSecondNumber.addEventListener("keyup", function () {
    const firstNumber = parseFloat(inputFirstNumber.value);
    const secondNumber = parseFloat(inputSecondNumber.value);
    formIsValid = validateForm(firstNumber, secondNumber);

    if (formIsValid) {
      errorMessage.classList.remove("error");
      errorMessage.textContent = "";
      inputFirstNumber.style = "";
      button.disable = false;
    } else {
      errorMessage.classList.add("error");
      errorMessage.textContent =
        "Formulário inválido: o primeiro número precisa ser menor que o segundo.";
      inputFirstNumber.style.border = "2px solid red";
      button.disable = true;
    }
  });
}

checkInput();

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  if (formIsValid) {
    successMessage.classList.add("success");
    successMessage.textContent = "Fórmulário enviado com sucesso!";
    inputFirstNumber.value = "";
    inputSecondNumber.value = "";
    inputFirstNumber.disabled = true;
    inputSecondNumber.disabled = true;
  }
});
