const rangeControl = document.querySelector('#font-size-control');
console.log(rangeControl);

const textControl = document.querySelector('#text');
console.log(textControl);

function textFontSize(event) {
    textControl.style.fontSize = `${event.currentTarget.value}px`
}
rangeControl.addEventListener('input', textFontSize);