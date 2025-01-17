import { articlesData } from './data.js';

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
      ${articlesData[index].isHaveRange ? inputElement : cardDetailsElement}`;

    const rangeElements = document.querySelectorAll('.card__range');
    const rangeEllipsis = document.querySelectorAll('.card__range-ellipse');

    switch (index) {
      case 1:
        rangeElements[index].classList.add(
          'card__range_pressure',
          'card__range_gradient'
        );
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
