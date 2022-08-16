// import { DateTime } from './luxon.js';

const dateContainer = document.querySelector('.date');

// const dateDisplay = () => {
//   const date = DateTime.now().toString();
//   dateContainer.innerHTML += date;
// };

// Using in-built function Date()
const dateDisplay = () => {
  const date = new Date();
  dateContainer.innerHTML += date;
};

export default dateDisplay;
