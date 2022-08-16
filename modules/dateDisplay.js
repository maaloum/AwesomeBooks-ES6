const dateContainer = document.querySelector('.date');
const dateDisplay = () => {
  const date = new Date();
  dateContainer.innerHTML += date;
};

export default dateDisplay;
