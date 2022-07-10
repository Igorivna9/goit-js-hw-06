function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyStyle = document.querySelector('body');
const buttonColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

const changeColor = () => {
  bodyStyle.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}

buttonColor.addEventListener('click', changeColor);



