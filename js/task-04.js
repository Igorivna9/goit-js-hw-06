let counterValue = 0;
const decrement = () => {
    counterValue -= 1;
    valueBtn();
};
const increment = () => {
    counterValue += 1;
    valueBtn();
};
const valueBtn = () => {
    value.textContent = counterValue;
}

const decrementBtn = document.querySelector('[data-action = "decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('[data-action = "increment"]');
console.log(incrementBtn);

const value = document.querySelector('#value');
console.log(value);

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);