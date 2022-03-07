'use strict'

const URL_MIN_RANGE = 1;
const URL_MAX_RANGE =25;
const LIKES_MIN_RANGE = 15;
const LIKES_MAX_RANGE = 200;
const COMMENTS_MIN_RANGE = 1;
const COMMENTS_MAX_RANGE = 12;
const ID_MIN_RANGE = 1;
const ID_MAX_RANGE = 1000;
const PHOTOS_DESCRIPTIONS = [
  'Красивое',
  'Сделал сегодня утром',
  'Попробовал новый фильтр',
  'Что думаете?',
  'Это лучшее, что я видел за всю свою жизнь!',
  'Фото не передает запахи... оно и к лучшему',
  'Взглад под новым углом', 'Черно-белое или цветное?',
  'Не могу налюбоваться, ну что за красота!',
]
const AVATAR_MIN_RANGE = 1;
const AVATAR_MAX_RANGE = 6;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Зевс',
  'Посейдон',
  'Гефест',
  'Апполон',
  'Гермес',
  'Арес',
  'Гера',
  'Афина',
  'Аид',
  'Деметра',
  'Персефона',
  'Афродита',
  'Дионис',
  'Артемида',
  'Гестия'
];
const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;

const PHOTOS_ARRAY = [];
const LIKES_ARRAY =[];
const COMMENTS_ARRAY =[];
const ID_ARRAY = [];
const AVATAR_ARRAY = [];

//создание массива
const GENERATE_ARRAY = (array, min, max) => {
  for (let index = min - 1; index < max; index++) {
    array.push(index + 1);
  }
  return array;
}

GENERATE_ARRAY(PHOTOS_ARRAY, URL_MIN_RANGE, URL_MAX_RANGE);
GENERATE_ARRAY(LIKES_ARRAY, LIKES_MIN_RANGE, LIKES_MAX_RANGE);
GENERATE_ARRAY(COMMENTS_ARRAY, COMMENTS_MIN_RANGE, COMMENTS_MAX_RANGE);
GENERATE_ARRAY(ID_ARRAY, ID_MIN_RANGE, ID_MAX_RANGE);
GENERATE_ARRAY(AVATAR_ARRAY, AVATAR_MIN_RANGE, AVATAR_MAX_RANGE);

function getRandomInt(min, max) {
  if (min < max && min >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // alert("Uncorrect input numbers");
}

// уникальное рандомное число из массива
const GET_UNIQUE_ARRAY_INT = (array) => {
  const RANDOM = getRandomInt(0, array.length - 1);
  return array.splice(RANDOM, 1);
};
//создание объекта комментария
const CREATE_COMMENTS_DATA = () => {
  const UNIQUE_ID = GET_UNIQUE_ARRAY_INT(ID_ARRAY);
  const AVATAR = AVATAR_ARRAY[getRandomInt(0, AVATAR_ARRAY.length -1)];
  return {
    id: UNIQUE_ID[0],
    avatar: `img/avatar-${AVATAR}.svg`,
    message: COMMENTS[getRandomInt(0, COMMENTS.length - 1)],
    name: NAMES[getRandomInt(0, NAMES.length - 1)],
  };
};

const KEYS_COMMENT = [
  'id',
  'avatar',
  'message',
  'name',
];

KEYS_COMMENT.forEach((key) => {
  CREATE_COMMENTS_DATA[key];
});

//создание объекта описания фото
const CREATE_PHOTOS_DATA = () => {
  const UNIQUE_ID = ID_ARRAY.splice(0, 1);
  const UNIQUE_PHOTO_ID = GET_UNIQUE_ARRAY_INT(PHOTOS_ARRAY);
  const GENERATE_COMMENTS = Array.from({length: COMMENTS_ARRAY[getRandomInt(0, COMMENTS_ARRAY.length - 1)]}, CREATE_COMMENTS_DATA);
  return {
    id: UNIQUE_ID[0],
    url: `photos/${UNIQUE_PHOTO_ID}.jpg`,
    description: PHOTOS_DESCRIPTIONS[getRandomInt(0, PHOTOS_DESCRIPTIONS.length - 1)],
    likes: LIKES_ARRAY[getRandomInt(0, LIKES_ARRAY.length - 1)],
    comments: GENERATE_COMMENTS,
  };
};

const KEYS_PHOTO = [
  'id',
  'url',
  'description',
  'likes',
  'comments',
];

KEYS_PHOTO.forEach((key) => {
  CREATE_PHOTOS_DATA[key];
});

const SIMILAR_PHOTO_DESCRIPTIONS = Array.from({length: SIMILAR_PHOTO_DESCRIPTION_COUNT}, CREATE_PHOTOS_DATA);

function checkCommentLength(string, length) {
  return string.length <= length;
}

const comment = document.querySelector('.social__footer-text');

checkCommentLength(comment.value, 140);
// console.log(SIMILAR_PHOTO_DESCRIPTIONS);
