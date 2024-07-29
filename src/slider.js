import { slider24Hours, slider5Days } from './data.js';

export function forecastClickHandle() {
  document.addEventListener('DOMContentLoaded', () => {
    // Заполняем карточки при загрузке страницы, в зависимости от сохраненной вкладки слайдера (может в дальнейшем интеграция с LS будет :) )
    const activeSliderTab = document.querySelector('.forecast__item_underline');
    if (activeSliderTab.id == '24Hours') {
      create24HoursCards();
    } else if (activeSliderTab.id == '5Days') {
      create5DaysCards();
    }
  });

  document.querySelector('.slider__menu').addEventListener('click', (event) => {
    const underlined = 'forecast__item_underline';
    const target = event.target.closest('.forecast__item');
    let activeTabElement = document.querySelector(`.${underlined}`);

    if (!target) return;

    if (!target.classList.contains(underlined)) {
      target.classList.add(underlined);
      activeTabElement.classList.remove(underlined);
      activeTabElement = document.querySelector(`.${underlined}`);
    }

    // Проверяем какая вкладка активна
    if (activeTabElement.id == '24Hours') {
      create24HoursCards();
    } else if (activeTabElement.id == '5Days') {
      create5DaysCards();
    }
  });
}

function create24HoursCards() {
  const sliderCardsContainer = document.querySelector('.slider-cards');
  sliderCardsContainer.innerHTML = '';

  slider24Hours.forEach((cardData, index) => {
    const cardElement = document.createElement('li');
    cardElement.classList.add('menu__card');

    cardElement.innerHTML = `
      <time datetime="${cardData.time}">${cardData.time}</time>
      <img
        src="${cardData.iconURL}"
        alt="broken-clouds"
        width="32"
        height="32"
      />
      <div>${cardData.degrees}</div>
    `;

    sliderCardsContainer.append(cardElement);

    // Вставляем пустой элемент в конец слайдера
  });
}

function create5DaysCards() {
  const sliderCardsContainer = document.querySelector('.slider-cards');
  sliderCardsContainer.innerHTML = '';

  slider5Days.forEach((cardData, index) => {
    const cardElement = document.createElement('li');
    cardElement.classList.add('menu__card');

    // Вытаскиваем из строки числовую дату, чтобы подставить в атрибут datetime
    const datetime = Array.from(cardData.date)
      .filter((letter) => +letter || (+letter == 0 && letter !== ' ')) // Проверка что строка является числом
      .join('');

    cardElement.innerHTML = `
      <time datetime="01-${datetime}">${cardData.date}</time>
      <img
        src="${cardData.iconURL}"
        alt="broken-clouds"
        width="32"
        height="32"
      />
      <div>от ${cardData.degreesFrom} до ${cardData.degreesTo}</div>
    `;

    sliderCardsContainer.append(cardElement);

    
  });
}
