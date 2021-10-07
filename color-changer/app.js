const colors = ['red', 'green', 'blue', 'white', 'pink'];

const button = document.getElementById('button');

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

const getNewColor = () => {
  document.body.style.backgroundColor = colors[getRandomNumber()];
};


button.addEventListener('click', getNewColor);