const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let intevalId = null;

function changeColor() {
  btnStart.disabled = true;
  intevalId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    btnStop.disabled = false;
  }, 1000);
}

function stopChangeColor() {
  clearInterval(intevalId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStart.addEventListener('click', changeColor);
btnStop.addEventListener('click', stopChangeColor);
