let count = 0;

const counter = document.getElementById('counter');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const increaseButton = document.getElementById('increase');

const decrease = () => {
  count = count - 1;
  counter.textContent = count;
  console.log(count);
};

const reset = () => {
  count = 0;
  counter.textContent = count;
  console.log(count);
}

const increase = () => {
  count = count + 1;
  counter.textContent = count;
  console.log(count);
}

decreaseButton.addEventListener('click', decrease);
resetButton.addEventListener('click', reset);
increaseButton.addEventListener('click', increase);