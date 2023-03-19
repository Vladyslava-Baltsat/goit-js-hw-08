import throttle from 'lodash.throttle';

const formEL = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const LOCAL_NAME = 'feedback-form-state';

formEL.addEventListener('input', throttle(onFormInput, 500));
formEL.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput() {
  const formData = {
    emailEl: emailEl.value,
    textareaEl: textareaEl.value,
  };
  localStorage.setItem(LOCAL_NAME, JSON.stringify(formData));
  // console.log(formData);
}

function onFormSubmit(e) {
  e.preventDefault();
  if (emailEl.value === '' || textareaEl.value === '') {
    const random = [
      'Заповніть всі поля!',
      'Гарна спроба, спробуй ще!',

    ];

    for (let i of random) {
      // console.log();
      return alert(random[Math.floor(Math.random() * random.length)]);
    }
  }

  const saveLocalStorage = localStorage.getItem(LOCAL_NAME);
  const objectFromLocalStorage = JSON.parse(saveLocalStorage);
  console.log(objectFromLocalStorage);

  localStorage.removeItem(LOCAL_NAME);
  e.currentTarget.reset();
}

function populateForm() {
  const saveLocalStorage = localStorage.getItem(LOCAL_NAME);
  const objectFromLocalStorage = JSON.parse(saveLocalStorage);
  if (objectFromLocalStorage) {
    emailEl.value = objectFromLocalStorage.emailEl;
    textareaEl.value = objectFromLocalStorage.textareaEl;
  }
}
