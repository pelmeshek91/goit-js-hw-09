import * as throttle from 'lodash.throttle';

let formValue = {};
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', handleSubmit);

function onFormInput(e) {
  const { name, value } = e.target;
  formValue[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

function saveMsg() {
  const { email, message } = form.elements;
  const formValueObj = JSON.parse(localStorage.getItem('feedback-form-state'));

  formValue.email = formValueObj?.email || '';
  formValue.message = formValueObj?.message || '';
  email.value = formValueObj?.email || '';
  message.value = formValueObj?.message || '';
}

saveMsg();

function handleSubmit(e) {
  e.preventDefault();

  console.log(formValue);

  e.target.reset();
  formValue = {};
  localStorage.removeItem('feedback-form-state');
}
