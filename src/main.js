import { forecastClickHandle } from "./slider.js";

const searchInput = document.querySelector('input');
const searchButton = document.querySelector('.input-button');
const closeButton = document.querySelector('.close');

searchInput.addEventListener('keypress', logValueFromInput);
searchInput.addEventListener('input', changeInputIcon);
closeButton.addEventListener('click', clearInput);

function logValueFromInput(event) {
  if (event.key === 'Enter' && searchInput.value) {
    console.log(searchInput.value);
  }
}

function changeInputIcon() {
  if (searchInput.value) {
    searchButton.style.display = 'none';
    closeButton.style.display = 'block';
  } else {
    searchButton.style.display = 'block';
    closeButton.style.display = 'none';
  }
}

function clearInput() {
  searchInput.value = '';
  searchButton.style.display = 'block';
  closeButton.style.display = 'none';
}

forecastClickHandle()

// alert('Прочитайте readme пожалуйста :)')