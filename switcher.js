const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const DELAY = 1000;
let colorSwitchInterval = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  colorSwitchInterval = setInterval(() => {
    const getColorId = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = colors[getColorId];
  }, DELAY);
    
  startBtn.disabled = true;
 };

function onStopBtnClick() {
  clearInterval(colorSwitchInterval);
  startBtn.disabled = false;
}