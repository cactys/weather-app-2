export const articlesData = [
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

export const slider24Hours = [
  {
    time: '12:00',
    iconURL: './public/images/time=day,state=broken-clouds.svg',
    degrees: '-7°',
  },
  {
    time: '15:00',
    iconURL: './public/images/time=day,state=broken-clouds.svg',
    degrees: '-5°',
  },
  {
    time: '18:00',
    iconURL: './public/images/time=day,state=broken-clouds.svg',
    degrees: '-7°',
  },
  {
    time: '21:00',
    iconURL: './public/images/time=day,state=broken-clouds.svg',
    degrees: '-9°',
  },
  {
    time: '00:00',
    iconURL: './public/images/time=day,state=broken-clouds.svg',
    degrees: '-11°',
  },
  {
    time: '03:00',
    iconURL: './public/images/time=day,state=broken-clouds.svg',
    degrees: '-13°',
  },
];

export const slider5Days = [
  {
    date: 'Вс, 07 янв.',
    iconURL: './public/images/time=day,state=few-clouds.svg',
    degreesFrom: '-17°',
    degreesTo: '-11°',
  },
  {
    date: 'Пн, 08 янв.',
    iconURL: './public/images/time=day,state=few-clouds.svg',
    degreesFrom: '-16°',
    degreesTo: '-8°',
  },
  {
    date: 'Вт, 09 янв.',
    iconURL: './public/images/time=day,state=few-clouds.svg',
    degreesFrom: '-8°',
    degreesTo: '-2°',
  },
  {
    date: 'Ср, 10 янв.',
    iconURL: './public/images/time=day,state=few-clouds.svg',
    degreesFrom: '-2°',
    degreesTo: '-1°',
  },
];
