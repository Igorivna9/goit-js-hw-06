const loginForm = document.querySelector('.login-form');
const validLogin = (event) => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        alert('All fields must be completed');
    }

    console.log(`Login: ${email}`);
    console.log(`Pass: ${password}`);

    event.currentTarget.reset();
}
loginForm.addEventListener('submit', validLogin);


