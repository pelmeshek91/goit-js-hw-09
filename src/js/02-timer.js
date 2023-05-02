// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const inputData = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

let timerId = null;
let startTime = new Date();

flatpickr(inputData, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startTime = selectedDates[0];
  },
});

function countDown() {
  timerId = setInterval(() => {
    const currentTime = Date.now();
    if (startTime - currentTime < 0) {
      clearInterval(timerId);
    } else {
      const deltaTime = startTime - currentTime;
      const runTime = convertMs(deltaTime);
      for (let key in runTime) {
        document.querySelector(`[data-${key}]`).innerHTML = runTime[key];
      }
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

btnStart.addEventListener('click', countDown);
