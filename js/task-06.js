const validation = document.querySelector('#validation-input');
console.log(validation);

function validInput(event) {
    if (Number(validation.dataset.length) === event.currentTarget.value.length) {
        validation.classList.add("valid");
        validation.classList.remove("invalid");
    } else {
        validation.classList.remove("valid");
        validation.classList.add("invalid");
    }
}
validation.addEventListener("blur", validInput);