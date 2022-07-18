const loginForm = document.querySelector('.login-form');
const validLogin = (event) => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        alert('All fields must be completed');
    }

    const dataForm = {
        email,
        password,
  };
  console.log(dataForm);

    event.currentTarget.reset();
}
loginForm.addEventListener('submit', validLogin);


