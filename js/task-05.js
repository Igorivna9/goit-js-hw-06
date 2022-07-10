const nameIn = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');
const nameValue = 'Anonymous';

function eventInput(event) {
    if (event.currentTarget.value === '') {
        nameOut.textContent = nameValue;
    } else {
        nameOut.textContent = event.currentTarget.value;
    }
};
nameIn.addEventListener('input', eventInput);

console.log(nameIn);
console.log(nameOut);
