const articlesData = [
  {
    title: 'Влажность',
    iconURL: './public/images/humidity.svg',
    value: '75 %',
    isHaveRange: true,
    rangeValue: 64,
    details: ['0%', '100%'],
  },
  {
    title: 'Давление',
    iconURL: './public/images/barometr.svg',
    value: '761',
    isHaveRange: true,
    rangeValue: 76,
    details: ['Повышенное'],
  },
  {
    title: 'Видимость',
    iconURL: './public/images/visibility.svg',
    value: '28 км',
    isHaveRange: true,
    rangeValue: 24,
    details: ['Нормальная'],
  },
  {
    title: 'Рассвет',
    iconURL: './public/images/sunrise.svg',
    value: '8:42',
    isHaveRange: false,
    details: ['Прошло: 02:47'],
  },
  {
    title: 'Закат',
    iconURL: './public/images/sunset.svg',
    value: '16:37',
    isHaveRange: false,
    details: ['Осталось: 05:08'],
  },
  {
    title: 'Сила ветра',
    iconURL: './public/images/direction.svg',
    value: '2 м/с',
    isHaveRange: false,
    details: ['Северо-западный'],
  },
];

function wrapArticleDetails(detailsArray) {
  if (!detailsArray) return;
  if (detailsArray.length <= 1) {
    return `<p>${detailsArray}</p>`;
  }
  const textBlock = detailsArray.reduce((acc, curr) => {
    return acc + `<p>${curr}</p>`;
  }, '');
  return textBlock;
}

function fillWeatherCards() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    const cardDetailsElement = `<div class="card__details">
      ${wrapArticleDetails(articlesData[index].details)}
    </div>`;

    const inputElement = `<div class="card__bar">
      <input
        disabled
        type="range"
        class="card__range"
        name="range"
        min="0"
        max="100"
        value="${articlesData[index].rangeValue}"
      />
      ${cardDetailsElement}
      <div class="card__range-ellipse"></div>
    </div>`;

    card.innerHTML = `<h3 class="card__title">${articlesData[index].title}</h3>
    <img
      width="32"
      height="32"
      src="${articlesData[index].iconURL}"
      alt="иконка"
      class="card__image"
    />
    <div class="card__value">${articlesData[index].value}</div>
    <div class="card__bar">
      ${articlesData[index].isHaveRange ? inputElement : cardDetailsElement}
    </div>`;

    const rangeElements = document.querySelectorAll('.card__range');
    const rangeEllipsis = document.querySelectorAll('.card__range-ellipse');

    switch (index) {
      case 1:
        rangeElements[index].classList.add('card__range_pressure');
        rangeEllipsis[index].classList.add('card__range-ellipse_pressure');
        break;

      case 2:
        rangeElements[index].classList.add('card__range_visibility');
        rangeEllipsis[index].classList.add('card__range-ellipse_visibility');
        break;

      default:
        break;
    }

    const isSingleDetailsAndHaveRange =
      articlesData[index].details.length <= 1 &&
      articlesData[index].isHaveRange;

    if (isSingleDetailsAndHaveRange) {
      document
        .querySelectorAll('.card__details')
        [index].classList.add('card__details_center');
    }
  });
}
fillWeatherCards();
