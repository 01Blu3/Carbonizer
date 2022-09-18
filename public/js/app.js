const tripForm = document.querySelector('form');
const calculate = document.querySelector('input');
const origins = document.querySelector('#origins');
const destination = document.querySelector('#destination');
const selectMake = document.querySelector('#car');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

const ktom = kilometers => Math.floor(kilometers / 1609.34);

const fuelize = (make, mile) => {
  switch (make) {
    case 'Impala':
      return (mile * 409) / 1000;
    case 'Honda':
      return (mile * 305) / 1000;
    case 'Ford':
      return (mile * 411) / 1000;
    case 'BMW':
      return (mile * 234) / 1000;
    default:
      console.error('How did you break this????');
  }
};

tripForm.addEventListener('submit', e => {
  e.preventDefault();
  let start = origins.value;
  let end = destination.value;
  let carType = selectMake.options[selectMake.selectedIndex].value;

  messageOne.textContent = 'loading...';
  messageTwo.textContent = '';
  fetch(`/carbonize?origins=${start}&destination=${end}`).then(res =>
    res.json().then(data => {
      if (data.error) {
        messageOne.textContent = '';
        messageTwo.textContent = data.error;
        return;
      }
      // console.log(carType);
      const miles = ktom(data.meter);
      const footprint = fuelize(carType, miles);
      messageOne.textContent = `Trip is ${miles} miles taking ${data.timeText}`;
      messageTwo.textContent = `Your carbon footprint for the trip will be ${footprint} kgs`;
      let textmsg = messageTwo.textContent;
      fetch(`/text?message=${textmsg}`);
    })
  );
});
