const tripForm = document.querySelector('form');

const calculate = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

tripForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log();
  console.log(e);
});
