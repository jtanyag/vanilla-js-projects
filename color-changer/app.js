const colors = ['red', 'green', 'blue', 'white', 'pink'];

const button = document.getElementById('button');
const color = document.querySelector('.color');

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

const getNewColor = () => {
  let bgColor = colors[getRandomNumber()];
  document.body.style.backgroundColor = bgColor;
  color.textContent = bgColor;
};


button.addEventListener('click', getNewColor);