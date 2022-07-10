const loginForm = document.querySelector('.login-form');
const validLogin = (event) => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '') {
        alert('Enter login');
    }
    if (password === '') {
        alert('Enter password');
    }

    console.log(`Login: ${email}`);
    console.log(`Pass: ${password}`);

    event.currentTarget.reset();
}
loginForm.addEventListener('submit', validLogin);


