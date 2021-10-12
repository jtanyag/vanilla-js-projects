let count = 0;

const counter = document.getElementById('counter');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const increaseButton = document.getElementById('increase');

const decrease = () => {
  count = count - 1;
  counter.textContent = count;
  changeColor();
};

const reset = () => {
  count = 0;
  counter.textContent = count;
  changeColor();
};

const increase = () => {
  count = count + 1;
  counter.textContent = count;
  changeColor();
};

const changeColor = () => {
  if (count < 0) {
    counter.style.color = 'red';
  } else if (count > 0) {
    counter.style.color = 'green';
  } else {
    counter.style.color = 'black';
  };
};

decreaseButton.addEventListener('click', decrease);
resetButton.addEventListener('click', reset);
increaseButton.addEventListener('click', increase);