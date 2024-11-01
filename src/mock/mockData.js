export const articlesData = [
  {
    title: 'Влажность',
    iconId: 'humidity-svg',
    value: '75 %',
    isHaveRange: true,
    rangeValue: 64,
    details: ['0%', '100%'],
  },
  {
    title: 'Давление',
    iconId: 'barometer-svg',
    value: '761',
    isHaveRange: true,
    rangeValue: 76,
    details: ['Повышенное'],
  },
  {
    title: 'Видимость',
    iconId: 'visibility-svg',
    value: '28 км',
    isHaveRange: true,
    rangeValue: 24,
    details: ['Нормальная'],
  },
  {
    title: 'Рассвет',
    iconId: 'sunrise-svg',
    value: '8:42',
    isHaveRange: false,
    details: ['Прошло: 02:47'],
  },
  {
    title: 'Закат',
    iconId: 'sunset-svg',
    value: '16:37',
    isHaveRange: false,
    details: ['Осталось: 05:08'],
  },
  {
    title: 'Сила ветра',
    iconId: 'northwest-direction-svg',
    value: '2 м/с',
    isHaveRange: false,
    details: ['Северо-западный'],
  },
];

export const slider24Hours = [
  {
    time: '12:00',
    iconId: 'day-broken-clouds-svg',
    degrees: '-7°',
  },
  {
    time: '15:00',
    iconId: 'day-broken-clouds-svg',
    degrees: '-5°',
  },
  {
    time: '18:00',
    iconId: 'day-broken-clouds-svg',
    degrees: '-7°',
  },
  {
    time: '21:00',
    iconId: 'night-broken-clouds-svg',
    degrees: '-9°',
  },
  {
    time: '00:00',
    iconId: 'night-broken-clouds-svg',
    degrees: '-11°',
  },
  {
    time: '03:00',
    iconId: 'night-broken-clouds-svg',
    degrees: '-13°',
  },
];

export const slider5Days = [
  {
    date: 'Вс, 07 янв.',
    iconId: 'day-few-clouds-svg',
    degreesFrom: '-17°',
    degreesTo: '-11°',
  },
  {
    date: 'Пн, 08 янв.',
    iconId: 'day-few-clouds-svg',
    degreesFrom: '-16°',
    degreesTo: '-8°',
  },
  {
    date: 'Вт, 09 янв.',
    iconId: 'day-broken-clouds-svg',
    degreesFrom: '-8°',
    degreesTo: '-2°',
  },
  {
    date: 'Ср, 10 янв.',
    iconId: 'day-broken-clouds-svg',
    degreesFrom: '-2°',
    degreesTo: '-1°',
  },
];
